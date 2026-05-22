import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, startWith, takeUntil } from 'rxjs/operators';
import { MessageService } from 'primeng/api';
import { CvService } from 'src/app/core/services/cv.service';
import { AIService } from 'src/app/core/services/ai.service';
import { CvPayload } from 'src/app/core/interfaces/api.interfaces';

type SaveStatus = 'idle' | 'saving' | 'saved' | 'error';

@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['./cv-form.component.scss'],
})
export class CvFormComponent implements OnInit, OnDestroy {
  cvForm!: FormGroup;
  cvData$!: Observable<any>;
  isSaving              = false;
  saveStatus: SaveStatus = 'idle';
  isOptimizingSummary   = false;
  optimizingExpIndex: number | null = null;
  isPublic       = false;
  publicToken    = '';
  isTogglingPublic = false;
  pdfSidebarVisible     = false;
  pdfSafeUrl: SafeResourceUrl | null = null;
  private pdfRawUrl: string | null = null;
  isLoadingPdf          = false;
  cvId!: number;

  private formDirty = false;
  private destroy$ = new Subject<void>();

  cvReference = '';

  readonly cvTemplates = [
    { id: 'classic', label: 'Classique', desc: 'Épuré, minimaliste',   defaultColor: '#6366f1' },
    { id: 'sidebar', label: 'Sidebar',   desc: 'Colonne colorée',      defaultColor: '#0d9488' },
  ];

  readonly presetColors = [
    '#6366f1', '#0d9488', '#7c3aed', '#2563eb',
    '#dc2626', '#059669', '#d97706', '#0f172a',
  ];

  readonly quillModules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ header: [1, 2, 3, false] }],
      ['link'],
      ['clean'],
    ],
  };

  readonly quillSimple = {
    toolbar: [
      ['bold', 'italic'],
      [{ list: 'bullet' }],
      ['clean'],
    ],
  };

  constructor(
    private fb: FormBuilder,
    private cvService: CvService,
    private aiService: AIService,
    private sanitizer: DomSanitizer,
    private msg: MessageService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.cvId = Number(this.route.snapshot.paramMap.get('id'));

    this.cvForm = this.fb.group({
      title:        [''],
      template:     ['classic'],
      primaryColor: ['#6366f1'],
      photo:        [''],
      personalInfo: this.fb.group({
        name: [''], jobTitle: [''], email: [''], phone: [''], address: [''],
      }),
      professionalSummary: [''],
      experiences: this.fb.array([]),
      educations:  this.fb.array([]),
      skills:      this.fb.array([]),
      languages:   this.fb.array([]),
    });

    this.cvData$ = this.cvForm.valueChanges.pipe(startWith(this.cvForm.value));

    // Charger le CV
    this.cvService.get(this.cvId).subscribe({
      next: res => { if (res.data) this.patchForm(res.data); },
      error: () => {},
    });

    // Auto-save
    this.cvForm.valueChanges.pipe(
      debounceTime(1500),
      distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
      takeUntil(this.destroy$),
    ).subscribe(() => { if (this.formDirty) this.autoSave(); });

    this.cvForm.valueChanges.pipe(takeUntil(this.destroy$))
      .subscribe(() => { this.formDirty = true; });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /* ── Control getters ──────────────────────────────────── */
  get titleControl() { return this.cvForm.get('title') as FormControl; }

  /* ── FormArray getters ─────────────────────────────────── */
  get experiences() { return this.cvForm.get('experiences') as FormArray; }
  get educations()  { return this.cvForm.get('educations')  as FormArray; }
  get skills()      { return this.cvForm.get('skills')      as FormArray; }
  get languages()   { return this.cvForm.get('languages')   as FormArray; }

  addExperience(): void {
    this.experiences.push(this.fb.group({
      company: [''], position: [''], startDate: [''], endDate: [''], description: [''],
    }));
  }
  addEducation(): void {
    this.educations.push(this.fb.group({ institution: [''], degree: [''], endDate: [''] }));
  }
  addSkill():    void { this.skills.push(this.fb.group({ name: [''], level: [''] })); }
  addLanguage(): void { this.languages.push(this.fb.group({ name: [''], proficiency: [''] })); }

  removeExperience(i: number): void { this.experiences.removeAt(i); }
  removeEducation(i: number):  void { this.educations.removeAt(i); }
  removeSkill(i: number):      void { this.skills.removeAt(i); }
  removeLanguage(i: number):   void { this.languages.removeAt(i); }

  selectTemplate(tpl: { id: string; defaultColor: string }): void {
    this.cvForm.get('template')?.setValue(tpl.id);
    this.cvForm.get('primaryColor')?.setValue(tpl.defaultColor);
  }

  onPhotoUpload(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const size = 200;
        canvas.width = size; canvas.height = size;
        const ctx = canvas.getContext('2d')!;
        const ratio = Math.max(size / img.width, size / img.height);
        const w = img.width * ratio, h = img.height * ratio;
        ctx.drawImage(img, (size - w) / 2, (size - h) / 2, w, h);
        this.cvForm.get('photo')?.setValue(canvas.toDataURL('image/jpeg', 0.75));
      };
      img.src = e.target!.result as string;
    };
    reader.readAsDataURL(file);
  }

  removePhoto(): void {
    this.cvForm.get('photo')?.setValue('');
  }

  optimizeSummary(): void {
    const raw = this.stripHtml(this.cvForm.get('professionalSummary')?.value ?? '');
    if (!raw.trim()) {
      this.msg.add({ severity: 'warn', summary: 'Champ vide', detail: 'Rédigez d\'abord un résumé avant de l\'optimiser.' });
      return;
    }
    this.isOptimizingSummary = true;
    this.aiService.optimizeCv(raw).subscribe({
      next: res => {
        this.cvForm.get('professionalSummary')?.setValue(res.data.optimizedContent);
        this.isOptimizingSummary = false;
        this.msg.add({ severity: 'success', summary: 'Résumé optimisé', detail: 'Le résumé a été amélioré par l\'IA.' });
      },
      error: () => {
        this.isOptimizingSummary = false;
        this.msg.add({ severity: 'error', summary: 'Erreur IA', detail: 'L\'optimisation a échoué. Vérifiez votre clé API.' });
      },
    });
  }

  optimizeExperience(i: number): void {
    const desc = this.stripHtml(this.experiences.at(i).get('description')?.value ?? '');
    if (!desc.trim()) {
      this.msg.add({ severity: 'warn', summary: 'Champ vide', detail: 'Rédigez d\'abord une description avant de l\'optimiser.' });
      return;
    }
    this.optimizingExpIndex = i;
    this.aiService.optimizeCv(desc).subscribe({
      next: res => {
        this.experiences.at(i).get('description')?.setValue(res.data.optimizedContent);
        this.optimizingExpIndex = null;
        this.msg.add({ severity: 'success', summary: 'Description optimisée', detail: 'La description a été améliorée par l\'IA.' });
      },
      error: () => {
        this.optimizingExpIndex = null;
        this.msg.add({ severity: 'error', summary: 'Erreur IA', detail: 'L\'optimisation a échoué.' });
      },
    });
  }

  private stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  }

  private autoSave(): void {
    this.saveStatus = 'saving';
    this.cvService.save(this.cvId, this.cvForm.value).subscribe({
      next: () => {
        this.saveStatus = 'saved';
        setTimeout(() => { if (this.saveStatus === 'saved') this.saveStatus = 'idle'; }, 3000);
      },
      error: () => { this.saveStatus = 'error'; },
    });
  }

  onSave(): void {
    this.isSaving = true;
    this.cvService.save(this.cvId, this.cvForm.value).subscribe({
      next: () => {
        this.saveStatus = 'saved';
        this.isSaving = false;
        this.msg.add({ severity: 'success', summary: 'CV enregistré', detail: 'Votre CV a été sauvegardé.' });
        setTimeout(() => { if (this.saveStatus === 'saved') this.saveStatus = 'idle'; }, 3000);
      },
      error: () => {
        this.saveStatus = 'error';
        this.isSaving = false;
        this.msg.add({ severity: 'error', summary: 'Erreur', detail: 'Impossible de sauvegarder.' });
      },
    });
  }

  get publicUrl(): string {
    return this.publicToken ? `${window.location.origin}/p/${this.publicToken}` : '';
  }

  togglePublic(): void {
    this.isTogglingPublic = true;
    this.cvService.togglePublic(this.cvId).subscribe({
      next: res => {
        this.isPublic    = res.data.is_public;
        this.publicToken = res.data.public_token ?? '';
        this.isTogglingPublic = false;
        this.msg.add({
          severity: this.isPublic ? 'success' : 'info',
          summary: this.isPublic ? 'Portfolio publié' : 'Portfolio masqué',
          detail: this.isPublic ? 'Votre portfolio est accessible en ligne.' : 'Le portfolio n\'est plus public.',
        });
      },
      error: () => { this.isTogglingPublic = false; },
    });
  }

  copyPublicUrl(): void {
    navigator.clipboard.writeText(this.publicUrl).then(() => {
      this.msg.add({ severity: 'success', summary: 'Copié', detail: 'Lien copié dans le presse-papiers.' });
    });
  }

  onPreviewPdf(): void {
    this.isLoadingPdf = true;
    this.cvService.getPdfBlob(this.cvId).subscribe({
      next: blob => {
        if (this.pdfRawUrl) URL.revokeObjectURL(this.pdfRawUrl);
        this.pdfRawUrl = URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }));
        this.pdfSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfRawUrl);
        this.pdfSidebarVisible = true;
        this.isLoadingPdf = false;
      },
      error: () => { this.isLoadingPdf = false; },
    });
  }

  closePdfSidebar(): void {
    this.pdfSidebarVisible = false;
    if (this.pdfRawUrl) {
      URL.revokeObjectURL(this.pdfRawUrl);
      this.pdfRawUrl = null;
      this.pdfSafeUrl = null;
    }
  }

  onDownloadPdf(): void {
    const name  = this.cvForm.get('personalInfo.name')?.value || 'CV';
    const title = this.cvForm.get('title')?.value || 'export';
    const filename = `CV_${name}_${title}.pdf`.replace(/\s+/g, '_');
    this.cvService.downloadPdf(this.cvId, filename);
    this.msg.add({ severity: 'info', summary: 'Export PDF', detail: 'Téléchargement en cours…' });
  }

  goBack(): void {
    this.router.navigate(['/app/cv']);
  }

  private patchForm(data: any): void {
    this.formDirty = false;
    this.isPublic    = data.is_public    ?? false;
    this.publicToken = data.public_token ?? '';
    this.cvReference = data.reference    ?? '';

    this.cvForm.patchValue({
      title:        data.title         ?? '',
      template:     data.template      ?? 'classic',
      primaryColor: data.primary_color ?? '#6366f1',
      photo:        data.photo         ?? '',
      personalInfo:        data.personal_info ?? {},
      professionalSummary: data.professional_summary ?? '',
    }, { emitEvent: false });

    this.patchArray('experiences', data.experiences ?? [], () =>
      this.fb.group({ company: [''], position: [''], startDate: [''], endDate: [''], description: [''] }),
    );
    this.patchArray('educations', data.educations ?? [], () =>
      this.fb.group({ institution: [''], degree: [''], endDate: [''] }),
    );
    this.patchArray('skills',    data.skills    ?? [], () => this.fb.group({ name: [''], level: [''] }));
    this.patchArray('languages', data.languages ?? [], () => this.fb.group({ name: [''], proficiency: [''] }));

    setTimeout(() => { this.formDirty = false; }, 0);
  }

  private patchArray(key: string, items: any[], factory: () => FormGroup): void {
    const arr = this.cvForm.get(key) as FormArray;
    arr.clear({ emitEvent: false });
    items.forEach(item => {
      const g = factory();
      g.patchValue(item, { emitEvent: false });
      arr.push(g, { emitEvent: false });
    });
  }
}

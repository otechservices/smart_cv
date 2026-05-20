import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, startWith, takeUntil } from 'rxjs/operators';
import { MessageService } from 'primeng/api';
import { CvService } from 'src/app/core/services/cv.service';
import { PdfService } from 'src/app/core/services/pdf.service';
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
  isSaving    = false;
  saveStatus: SaveStatus = 'idle';
  cvId!: number;

  private formDirty = false;
  private destroy$ = new Subject<void>();

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
    private pdfService: PdfService,
    private msg: MessageService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.cvId = Number(this.route.snapshot.paramMap.get('id'));

    this.cvForm = this.fb.group({
      title:       [''],
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

  onExportPdf(): void {
    this.pdfService.exportCvAsPdf(this.cvForm.value);
    this.msg.add({ severity: 'info', summary: 'Export PDF', detail: 'Téléchargement en cours…' });
  }

  goBack(): void {
    this.router.navigate(['/app/cv']);
  }

  private patchForm(data: any): void {
    this.formDirty = false;
    this.cvForm.patchValue({
      title:               data.title ?? '',
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

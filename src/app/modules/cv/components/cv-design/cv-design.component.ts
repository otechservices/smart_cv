import {
  Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef, NgZone,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const fabric = require('fabric').fabric;
import { MessageService } from 'primeng/api';
import { CvService } from 'src/app/core/services/cv.service';

export type DesignMode = 'A' | 'B' | 'C';

@Component({
  selector: 'app-cv-design',
  templateUrl: './cv-design.component.html',
  styleUrls: ['./cv-design.component.scss'],
})
export class CvDesignComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('designCanvas') canvasEl!: ElementRef<HTMLCanvasElement>;

  cvId!: number;
  mode: DesignMode = 'A';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private canvas!: any;
  cvData: any = null;

  activeColor    = '#1e293b';
  bgColor        = '#ffffff';
  activeFontSize = 24;
  isSaving       = false;
  isLoading      = true;

  coverImagePreview: string | null = null;

  readonly CANVAS_W = 794;
  readonly CANVAS_H = 1123;

  readonly modes = [
    { id: 'A', icon: 'pi-pen-to-square', label: 'Canvas libre',    desc: 'Créez depuis zéro' },
    { id: 'B', icon: 'pi-id-card',       label: 'Depuis le CV',    desc: 'Blocs pré-remplis' },
    { id: 'C', icon: 'pi-upload',        label: 'Importer design', desc: 'Image / PDF Canva' },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cvService: CvService,
    private msg: MessageService,
    private zone: NgZone,
  ) {}

  ngOnInit(): void {
    this.cvId = Number(this.route.snapshot.paramMap.get('id'));
    this.cvService.get(this.cvId).subscribe({
      next: res => {
        if (res.data) this.cvData = res.data;
        this.isLoading = false;
      },
      error: () => { this.isLoading = false; },
    });
  }

  ngAfterViewInit(): void {
    this.initCanvas();
    this.loadSavedDesign();
  }

  private initCanvas(): void {
    this.canvas = new fabric.Canvas(this.canvasEl.nativeElement, {
      width: this.CANVAS_W,
      height: this.CANVAS_H,
      backgroundColor: '#ffffff',
      selection: true,
      preserveObjectStacking: true,
    });
    this.canvas.on('selection:created',  () => this.zone.run(() => this.syncFromSelected()));
    this.canvas.on('selection:updated',  () => this.zone.run(() => this.syncFromSelected()));
    this.canvas.on('selection:cleared',  () => {});
  }

  private loadSavedDesign(): void {
    this.cvService.getDesign(this.cvId).subscribe({
      next: res => {
        if (res.data?.cover_image) {
          this.coverImagePreview = res.data.cover_image;
        }
        if (res.data?.canvas_json) {
          this.canvas.loadFromJSON(res.data.canvas_json, () => {
            this.canvas.renderAll();
          });
        }
      },
    });
  }

  /* ── Mode switch ─────────────────────────────────────── */
  setMode(m: string): void {
    this.mode = m as DesignMode;
    if (m === 'B' && this.cvData) {
      this.loadCvTemplate();
    }
  }

  /* ── Populate canvas from CV data (Mode B) ─────────────── */
  loadCvTemplate(): void {
    if (!this.canvas) return;
    this.canvas.clear();
    const color = this.cvData?.primary_color || '#6366f1';
    const pi    = this.cvData?.personal_info || {};

    // Header band
    this.canvas.add(new fabric.Rect({
      left: 0, top: 0, width: this.CANVAS_W, height: 175,
      fill: color, selectable: true, evented: true,
    }));

    // Photo / initials
    const initials = (pi.name || 'U').charAt(0).toUpperCase();
    if (this.cvData?.photo) {
      fabric.Image.fromURL(this.cvData.photo, (img: any) => {
        img.scaleToWidth(80);
        img.set({ left: this.CANVAS_W - 110, top: 48, clipPath: new fabric.Circle({ radius: 40, originX: 'center', originY: 'center' }) });
        this.canvas.add(img);
        this.canvas.renderAll();
      });
    } else {
      this.canvas.add(new fabric.Circle({ left: this.CANVAS_W - 110, top: 48, radius: 40, fill: 'rgba(255,255,255,.2)', stroke: 'rgba(255,255,255,.5)', strokeWidth: 2 }));
      this.canvas.add(new fabric.Textbox(initials, { left: this.CANVAS_W - 95, top: 68, width: 50, fontSize: 32, fontWeight: 'bold', fill: '#fff', fontFamily: 'Arial', textAlign: 'center' }));
    }

    // Name
    this.canvas.add(new fabric.Textbox(pi.name || 'Votre Nom', {
      left: 40, top: 48, width: 580, fontSize: 38, fontWeight: 'bold',
      fill: '#ffffff', fontFamily: 'Arial',
    }));

    // Job title
    this.canvas.add(new fabric.Textbox(pi.jobTitle || '', {
      left: 40, top: 105, width: 580, fontSize: 18,
      fill: 'rgba(255,255,255,.85)', fontFamily: 'Arial',
    }));

    // Contacts line
    const contacts = [pi.email, pi.phone, pi.address].filter(Boolean).join('  ·  ');
    if (contacts) {
      this.canvas.add(new fabric.Textbox(contacts, {
        left: 40, top: 195, width: this.CANVAS_W - 80, fontSize: 12,
        fill: '#64748b', fontFamily: 'Arial',
      }));
    }

    let y = 235;

    // Summary
    if (this.cvData?.professional_summary) {
      y = this.addSection('PROFIL', y, color);
      const text = this.stripHtml(this.cvData.professional_summary).substring(0, 300);
      this.canvas.add(new fabric.Textbox(text, {
        left: 40, top: y, width: this.CANVAS_W - 80, fontSize: 13,
        fill: '#475569', fontFamily: 'Arial', lineHeight: 1.55,
      }));
      y += 70;
    }

    // Experiences
    const exps = this.cvData?.experiences || [];
    if (exps.length > 0) {
      y = this.addSection('EXPÉRIENCES', y, color);
      for (const exp of exps.slice(0, 3)) {
        this.canvas.add(new fabric.Circle({ left: 40, top: y + 4, radius: 4, fill: color }));
        this.canvas.add(new fabric.Textbox(`${exp.position || ''} — ${exp.company || ''}`, {
          left: 56, top: y, width: 520, fontSize: 14, fontWeight: 'bold',
          fill: '#1e293b', fontFamily: 'Arial',
        }));
        this.canvas.add(new fabric.Textbox(`${exp.startDate || ''} – ${exp.endDate || ''}`, {
          left: 590, top: y, width: 170, fontSize: 12,
          fill: '#94a3b8', fontFamily: 'Arial', textAlign: 'right',
        }));
        y += 24;
        if (exp.description) {
          const desc = this.stripHtml(exp.description).substring(0, 130);
          this.canvas.add(new fabric.Textbox(desc, {
            left: 56, top: y, width: this.CANVAS_W - 96, fontSize: 11,
            fill: '#64748b', fontFamily: 'Arial', lineHeight: 1.4,
          }));
          y += 38;
        } else { y += 12; }
      }
    }

    // Skills
    const skills = this.cvData?.skills || [];
    if (skills.length > 0 && y < 900) {
      y = this.addSection('COMPÉTENCES', y + 10, color);
      let sx = 40; let sy = y;
      for (const sk of skills.slice(0, 12)) {
        this.canvas.add(new fabric.Rect({ left: sx, top: sy, width: 110, height: 26, rx: 5, ry: 5, fill: '#eef2ff' }));
        this.canvas.add(new fabric.Textbox(sk.name || '', {
          left: sx + 4, top: sy + 5, width: 102, fontSize: 11,
          fill: color, fontFamily: 'Arial', textAlign: 'center',
        }));
        sx += 120;
        if (sx > 640) { sx = 40; sy += 36; }
      }
    }

    this.canvas.renderAll();
  }

  private addSection(title: string, y: number, color: string): number {
    this.canvas.add(new fabric.Textbox(title, {
      left: 40, top: y, width: 300, fontSize: 11, fontWeight: 'bold',
      fill: color, fontFamily: 'Arial', charSpacing: 120,
    }));
    this.canvas.add(new fabric.Rect({ left: 40, top: y + 18, width: this.CANVAS_W - 80, height: 2, fill: '#e2e8f0' }));
    return y + 28;
  }

  private stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  }

  /* ── Canvas tools ─────────────────────────────────────── */
  addText(): void {
    const t = new fabric.Textbox('Votre texte', {
      left: 100, top: 100, width: 300,
      fontSize: this.activeFontSize, fill: this.activeColor, fontFamily: 'Arial',
    });
    this.canvas.add(t);
    this.canvas.setActiveObject(t);
    this.canvas.renderAll();
  }

  addRect(): void {
    const r = new fabric.Rect({ left: 100, top: 100, width: 200, height: 80, fill: this.activeColor, rx: 5, ry: 5 });
    this.canvas.add(r);
    this.canvas.setActiveObject(r);
    this.canvas.renderAll();
  }

  addCircle(): void {
    const c = new fabric.Circle({ left: 100, top: 100, radius: 60, fill: this.activeColor });
    this.canvas.add(c);
    this.canvas.setActiveObject(c);
    this.canvas.renderAll();
  }

  addLine(): void {
    const l = new fabric.Line([50, 50, 300, 50], { stroke: this.activeColor, strokeWidth: 3 });
    this.canvas.add(l);
    this.canvas.setActiveObject(l);
    this.canvas.renderAll();
  }

  addImageFromFile(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      fabric.Image.fromURL(e.target!.result as string, (img: any) => {
        img.scaleToWidth(300);
        img.set({ left: 100, top: 100 });
        this.canvas.add(img);
        this.canvas.setActiveObject(img);
        this.canvas.renderAll();
      });
    };
    reader.readAsDataURL(file);
  }

  applyColor(): void {
    const obj = this.canvas.getActiveObject();
    if (!obj) return;
    obj.set('fill', this.activeColor);
    this.canvas.renderAll();
  }

  setBackground(): void {
    this.canvas.set('backgroundColor', this.bgColor);
    this.canvas.renderAll();
  }

  changeFontSize(): void {
    const obj = this.canvas.getActiveObject() as any;
    if (obj && (obj.type === 'textbox' || obj.type === 'text')) {
      obj.set('fontSize', this.activeFontSize);
      this.canvas.renderAll();
    }
  }

  toggleBold(): void {
    const obj = this.canvas.getActiveObject() as any;
    if (obj && (obj.type === 'textbox' || obj.type === 'text')) {
      obj.set('fontWeight', obj.fontWeight === 'bold' ? 'normal' : 'bold');
      this.canvas.renderAll();
    }
  }

  deleteSelected(): void {
    const active = this.canvas.getActiveObjects();
    active.forEach((o: any) => this.canvas.remove(o));
    this.canvas.discardActiveObject();
    this.canvas.renderAll();
  }

  bringForward(): void {
    const obj = this.canvas.getActiveObject();
    if (obj) { this.canvas.bringForward(obj); this.canvas.renderAll(); }
  }

  sendBackward(): void {
    const obj = this.canvas.getActiveObject();
    if (obj) { this.canvas.sendBackwards(obj); this.canvas.renderAll(); }
  }

  clearCanvas(): void {
    this.canvas.clear();
    this.canvas.set('backgroundColor', this.bgColor);
    this.canvas.renderAll();
  }

  private syncFromSelected(): void {
    const obj = this.canvas.getActiveObject();
    if (!obj) return;
    const fill = obj.get('fill') as string;
    if (fill && typeof fill === 'string' && fill.startsWith('#')) {
      this.activeColor = fill;
    }
    if ((obj as any).fontSize) {
      this.activeFontSize = (obj as any).fontSize!;
    }
  }

  /* ── Save / Export ─────────────────────────────────────── */
  saveDesign(): void {
    this.isSaving = true;
    const canvasJson = this.mode !== 'C' ? JSON.stringify(this.canvas.toJSON()) : '';
    this.cvService.saveDesign(this.cvId, {
      canvas_json: canvasJson,
      cover_image: this.coverImagePreview ?? '',
    }).subscribe({
      next: () => {
        this.isSaving = false;
        this.msg.add({ severity: 'success', summary: 'Sauvegardé', detail: 'Votre design a été enregistré.' });
      },
      error: () => {
        this.isSaving = false;
        this.msg.add({ severity: 'error', summary: 'Erreur', detail: 'Impossible de sauvegarder le design.' });
      },
    });
  }

  exportPng(): void {
    const dataUrl = this.canvas.toDataURL({ format: 'png', multiplier: 1 });
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = `design_cv_${this.cvId}.png`;
    a.click();
  }

  /* ── Mode C: cover image upload ─────────────────────────── */
  onCoverImageUpload(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => { this.zone.run(() => { this.coverImagePreview = e.target!.result as string; }); };
    reader.readAsDataURL(file);
  }

  removeCoverImage(): void {
    this.coverImagePreview = null;
  }

  goBack(): void {
    this.router.navigate(['/app/cv', this.cvId]);
  }

  ngOnDestroy(): void {
    this.canvas?.dispose();
  }
}

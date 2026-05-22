import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { JobService } from 'src/app/core/services/job.service';
import { CvService, CvSummary } from 'src/app/core/services/cv.service';
import { JobQueueItem, QueueStatus } from 'src/app/core/interfaces/api.interfaces';

const STATUS_CFG: Record<QueueStatus, { label: string; bg: string; color: string; icon: string }> = {
  pending:      { label: 'En attente',  bg: '#f8fafc', color: '#94a3b8', icon: 'pi-clock' },
  letter_ready: { label: 'Lettre prête', bg: '#eff6ff', color: '#3b82f6', icon: 'pi-file' },
  sent:         { label: 'Envoyée',     bg: '#fff7ed', color: '#f97316', icon: 'pi-send' },
  viewed:       { label: 'Vue',         bg: '#eff6ff', color: '#6366f1', icon: 'pi-eye' },
  interviewing: { label: 'Entretien',   bg: '#eef2ff', color: '#7c3aed', icon: 'pi-users' },
  offer:        { label: 'Offre reçue', bg: '#f0fdf4', color: '#16a34a', icon: 'pi-star' },
  rejected:     { label: 'Refusée',     bg: '#fef2f2', color: '#ef4444', icon: 'pi-times-circle' },
};

@Component({
  selector: 'app-job-queue-page',
  templateUrl: './job-queue-page.component.html',
  styleUrls: ['./job-queue-page.component.scss'],
})
export class JobQueuePageComponent implements OnInit {
  queue: JobQueueItem[] = [];
  cvList: CvSummary[] = [];
  isLoading    = true;
  generatingId: number | null = null;

  // Letter dialog
  showLetterDialog    = false;
  letterItem: JobQueueItem | null = null;

  // Add manual dialog
  showAddDialog = false;
  addForm = { title: '', company: '', location: '', job_url: '', job_description: '' };
  isSavingAdd = false;

  // Status dropdown options
  readonly statusOptions = Object.entries(STATUS_CFG).map(([v, c]) => ({ label: c.label, value: v as QueueStatus }));

  // Stats
  get stats() {
    return Object.entries(STATUS_CFG).map(([s, c]) => ({
      status: s as QueueStatus, ...c,
      count: this.queue.filter(q => q.status === s).length,
    }));
  }

  constructor(
    private jobService: JobService,
    private cvService: CvService,
    private msg: MessageService,
  ) {}

  ngOnInit(): void {
    this.loadQueue();
    this.cvService.list().subscribe({ next: r => { this.cvList = r.data ?? []; } });
  }

  loadQueue(): void {
    this.isLoading = true;
    this.jobService.getQueue().subscribe({
      next: r => { this.queue = r.data ?? []; this.isLoading = false; },
      error: () => { this.isLoading = false; },
    });
  }

  getCfg(status: QueueStatus) { return STATUS_CFG[status] ?? STATUS_CFG.pending; }

  generateLetter(item: JobQueueItem): void {
    this.generatingId = item.id;
    this.jobService.generateLetter(item.id).subscribe({
      next: res => {
        const idx = this.queue.findIndex(q => q.id === item.id);
        if (idx !== -1) {
          this.queue[idx] = { ...this.queue[idx], cover_letter: res.data.cover_letter, status: res.data.status };
        }
        this.generatingId = null;
        this.msg.add({ severity: 'success', summary: 'Lettre générée', detail: `Lettre IA prête pour "${item.title}"` });
        this.openLetter(this.queue[idx]);
      },
      error: () => {
        this.generatingId = null;
        this.msg.add({ severity: 'error', summary: 'Erreur IA', detail: 'La génération a échoué.' });
      },
    });
  }

  openLetter(item: JobQueueItem): void {
    this.letterItem = item;
    this.showLetterDialog = true;
  }

  copyLetter(): void {
    if (!this.letterItem?.cover_letter) return;
    navigator.clipboard.writeText(this.letterItem.cover_letter).then(() => {
      this.msg.add({ severity: 'success', summary: 'Copié', detail: 'Lettre copiée dans le presse-papiers.' });
    });
  }

  onStatusChange(item: JobQueueItem, status: QueueStatus): void {
    this.jobService.updateStatus(item.id, status).subscribe({
      next: res => {
        const idx = this.queue.findIndex(q => q.id === item.id);
        if (idx !== -1) this.queue[idx] = res.data;
      },
      error: () => { this.msg.add({ severity: 'error', summary: 'Erreur', detail: 'Mise à jour échouée.' }); },
    });
  }

  remove(item: JobQueueItem): void {
    this.jobService.removeFromQueue(item.id).subscribe({
      next: () => {
        this.queue = this.queue.filter(q => q.id !== item.id);
        this.msg.add({ severity: 'info', summary: 'Supprimé', detail: `"${item.title}" retiré de la file.` });
      },
    });
  }

  openAddDialog(): void {
    this.addForm = { title: '', company: '', location: '', job_url: '', job_description: '' };
    this.showAddDialog = true;
  }

  saveAdd(): void {
    if (!this.addForm.title || !this.addForm.company) return;
    this.isSavingAdd = true;
    this.jobService.addToQueue({ ...this.addForm, source: 'Manuel' }).subscribe({
      next: res => {
        this.queue = [res.data, ...this.queue];
        this.showAddDialog = false;
        this.isSavingAdd = false;
        this.msg.add({ severity: 'success', summary: 'Ajouté', detail: 'Candidature ajoutée à la file.' });
      },
      error: (err) => {
        this.isSavingAdd = false;
        const detail = err?.error?.message ?? 'Erreur lors de l\'ajout.';
        this.msg.add({ severity: err.status === 422 ? 'warn' : 'error', summary: 'Info', detail });
      },
    });
  }

  markAllSent(): void {
    const pending = this.queue.filter(q => q.status === 'letter_ready');
    if (!pending.length) {
      this.msg.add({ severity: 'info', summary: 'Rien à marquer', detail: 'Aucune lettre prête à envoyer.' });
      return;
    }
    let done = 0;
    pending.forEach(item => {
      this.jobService.updateStatus(item.id, 'sent').subscribe({
        next: res => {
          const idx = this.queue.findIndex(q => q.id === item.id);
          if (idx !== -1) this.queue[idx] = res.data;
          done++;
          if (done === pending.length) {
            this.msg.add({ severity: 'success', summary: 'Marqué', detail: `${done} candidature(s) marquée(s) comme envoyées.` });
          }
        },
      });
    });
  }

  formatDate(d: string | null): string {
    if (!d) return '–';
    try { return new Date(d).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' }); }
    catch { return d; }
  }
}

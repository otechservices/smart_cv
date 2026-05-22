import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { JobService } from 'src/app/core/services/job.service';
import { JobOffer } from 'src/app/core/interfaces/api.interfaces';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.scss'],
})
export class JobSearchComponent {
  query    = '';
  location = '';
  results: JobOffer[] = [];
  isLoading    = false;
  hasSearched  = false;
  addingId: string | null = null;

  showDetailDialog  = false;
  selectedJob: JobOffer | null = null;

  constructor(
    private jobService: JobService,
    private msg: MessageService,
  ) {}

  search(): void {
    if (!this.query.trim()) return;
    this.isLoading = true;
    this.hasSearched = true;
    this.results = [];

    this.jobService.searchJobs(this.query.trim(), this.location.trim()).subscribe({
      next: res => {
        this.results = res.data ?? [];
        this.isLoading = false;
        if (this.results.length === 0) {
          this.msg.add({ severity: 'info', summary: 'Aucun résultat', detail: 'Essayez d\'autres mots-clés.' });
        }
      },
      error: () => {
        this.isLoading = false;
        this.msg.add({ severity: 'error', summary: 'Erreur', detail: 'Impossible d\'atteindre l\'API d\'offres.' });
      },
    });
  }

  openDetail(job: JobOffer): void {
    this.selectedJob = job;
    this.showDetailDialog = true;
  }

  addToQueue(job: JobOffer): void {
    this.addingId = job.id;
    this.jobService.addToQueue({
      title:           job.title,
      company:         job.company,
      location:        job.location,
      job_url:         job.url,
      job_description: job.description,
      source:          job.source,
    }).subscribe({
      next: () => {
        this.addingId = null;
        this.msg.add({ severity: 'success', summary: 'Ajouté', detail: `"${job.title}" ajouté à votre file.` });
      },
      error: (err) => {
        this.addingId = null;
        const detail = err?.error?.message ?? 'Impossible d\'ajouter à la file.';
        this.msg.add({ severity: err.status === 422 ? 'warn' : 'error', summary: 'Info', detail });
      },
    });
  }

  formatDate(dateStr: string | null): string {
    if (!dateStr) return '';
    try {
      return new Date(dateStr).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' });
    } catch { return dateStr; }
  }
}

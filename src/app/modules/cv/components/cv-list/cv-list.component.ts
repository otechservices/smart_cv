import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CvService, CvSummary } from '../../../../core/services/cv.service';

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.scss'],
  providers: [ConfirmationService],
})
export class CvListComponent implements OnInit {
  cvs: CvSummary[] = [];
  isLoading = true;

  constructor(
    private cvService: CvService,
    private router: Router,
    private msg: MessageService,
    private confirm: ConfirmationService,
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.isLoading = true;
    this.cvService.list().subscribe({
      next: r => { this.cvs = r.data; this.isLoading = false; },
      error: () => { this.isLoading = false; },
    });
  }

  newCv(): void {
    this.cvService.create({}).subscribe({
      next: r => this.router.navigate(['/app/cv', r.data.id]),
      error: () => this.msg.add({ severity: 'error', summary: 'Erreur', detail: 'Impossible de créer un CV.' }),
    });
  }

  open(cv: CvSummary): void {
    this.router.navigate(['/app/cv', cv.id]);
  }

  confirmDelete(cv: CvSummary, event: Event): void {
    event.stopPropagation();
    this.confirm.confirm({
      message: `Supprimer <strong>${cv.title}</strong> ?`,
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.cvService.delete(cv.id).subscribe({
          next: () => {
            this.cvs = this.cvs.filter(c => c.id !== cv.id);
            this.msg.add({ severity: 'success', summary: 'Supprimé', detail: 'CV supprimé.' });
          },
        });
      },
    });
  }

  initials(name: string | null): string {
    if (!name) return '?';
    return name.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase();
  }

  timeAgo(dateStr: string): string {
    const diff = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1)  return 'À l\'instant';
    if (mins < 60) return `il y a ${mins} min`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24)  return `il y a ${hrs} h`;
    const days = Math.floor(hrs / 24);
    return `il y a ${days} j`;
  }
}

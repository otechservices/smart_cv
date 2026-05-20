import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { JobService } from '../../../../core/services/job.service';
import { Application } from '../../../../core/interfaces/api.interfaces';

const STATUS_CONFIG: Record<Application['status'], {
  label: string;
  severity: 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' | undefined;
  bg: string;
  color: string;
}> = {
  Sent:         { label: 'Envoyée',   severity: 'warning', bg: '#fff7ed', color: '#f97316' },
  Viewed:       { label: 'Vue',       severity: 'info',    bg: '#eff6ff', color: '#3b82f6' },
  Interviewing: { label: 'Entretien', severity: 'info',    bg: '#eef2ff', color: '#6366f1' },
  Offer:        { label: 'Offre',     severity: 'success', bg: '#f0fdf4', color: '#22c55e' },
  Rejected:     { label: 'Refusée',  severity: 'danger',  bg: '#fef2f2', color: '#ef4444' },
};

@Component({
  selector: 'app-job-tracking',
  templateUrl: './job-tracking.component.html',
  styleUrls: ['./job-tracking.component.scss']
})
export class JobTrackingComponent implements OnInit {

  applications: Application[] = [
    { company: 'Innovatech',       title: 'Frontend Developer',   date: '2023-10-26', status: 'Interviewing' },
    { company: 'Data Systems',     title: 'Software Engineer',    date: '2023-10-25', status: 'Viewed' },
    { company: 'Creative Minds',   title: 'UI/UX Designer',       date: '2023-10-24', status: 'Rejected' },
    { company: 'Future Solutions', title: 'Full-Stack Developer', date: '2023-10-22', status: 'Sent' },
    { company: 'Cloud Corp',       title: 'DevOps Engineer',      date: '2023-10-20', status: 'Offer' },
  ];

  statusStats = [
    { label: 'Envoyées',   status: 'Sent',         color: '#f97316', count: 0 },
    { label: 'Vues',       status: 'Viewed',        color: '#3b82f6', count: 0 },
    { label: 'Entretiens', status: 'Interviewing',  color: '#6366f1', count: 0 },
    { label: 'Offres',     status: 'Offer',         color: '#22c55e', count: 0 },
    { label: 'Refusées',   status: 'Rejected',      color: '#ef4444', count: 0 },
  ];

  statusOptions = [
    { label: 'Envoyée',   value: 'Sent' },
    { label: 'Vue',       value: 'Viewed' },
    { label: 'Entretien', value: 'Interviewing' },
    { label: 'Offre',     value: 'Offer' },
    { label: 'Refusée',   value: 'Rejected' },
  ];

  showDialog = false;
  isSaving = false;
  appForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private jobService: JobService,
    private messageService: MessageService,
  ) {}

  ngOnInit(): void {
    this.appForm = this.fb.group({
      company: ['', Validators.required],
      title:   ['', Validators.required],
      date:    [new Date().toISOString().split('T')[0], Validators.required],
      status:  ['Sent', Validators.required],
    });
    this.refreshStats();
  }

  openDialog(): void {
    this.appForm.reset({ date: new Date().toISOString().split('T')[0], status: 'Sent' });
    this.showDialog = true;
  }

  saveApplication(): void {
    this.appForm.markAllAsTouched();
    if (this.appForm.invalid) return;

    this.isSaving = true;
    const payload: Application = this.appForm.value;

    this.jobService.addApplication(payload).subscribe({
      next: (res) => {
        this.applications = [res.data.application, ...this.applications];
        this.refreshStats();
        this.showDialog = false;
        this.isSaving = false;
        this.messageService.add({ severity: 'success', summary: 'Candidature ajoutée', detail: res.message });
      },
      error: () => {
        this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Impossible d\'enregistrer la candidature.' });
        this.isSaving = false;
      },
    });
  }

  removeApplication(index: number): void {
    this.applications = this.applications.filter((_, i) => i !== index);
    this.refreshStats();
  }

  private refreshStats(): void {
    this.statusStats.forEach(s => {
      s.count = this.applications.filter(a => a.status === s.status).length;
    });
  }

  getStatusLabel(status: Application['status']): string {
    return STATUS_CONFIG[status]?.label ?? status;
  }

  getStatusSeverity(status: Application['status']): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' | undefined {
    return STATUS_CONFIG[status]?.severity ?? 'info';
  }

  getStatusStyle(status: Application['status']): Record<string, string> {
    const cfg = STATUS_CONFIG[status];
    return cfg ? { background: cfg.bg, color: cfg.color, border: 'none' } : {};
  }
}

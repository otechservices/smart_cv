import { Component, OnInit } from '@angular/core';

export interface Application {
  company: string;
  title: string;
  date: string;
  status: 'Sent' | 'Viewed' | 'Interviewing' | 'Offer' | 'Rejected';
}

@Component({
  selector: 'app-job-tracking',
  templateUrl: './job-tracking.component.html',
  styleUrls: ['./job-tracking.component.scss']
})
export class JobTrackingComponent implements OnInit {

  applications: Application[] = [
    { company: 'Innovatech', title: 'Frontend Developer', date: '2023-10-26', status: 'Interviewing' },
    { company: 'Data Systems', title: 'Software Engineer', date: '2023-10-25', status: 'Viewed' },
    { company: 'Creative Minds', title: 'UI/UX Designer', date: '2023-10-24', status: 'Rejected' },
    { company: 'Future Solutions', title: 'Full-Stack Developer', date: '2023-10-22', status: 'Sent' },
    { company: 'Cloud Corp', title: 'DevOps Engineer', date: '2023-10-20', status: 'Offer' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getStatusSeverity(status: 'Sent' | 'Viewed' | 'Interviewing' | 'Offer' | 'Rejected'): string {
    switch (status) {
      case 'Offer':
        return 'success';
      case 'Interviewing':
        return 'info';
      case 'Viewed':
        return 'primary';
      case 'Sent':
        return 'warning';
      case 'Rejected':
        return 'danger';
    }
  }
}

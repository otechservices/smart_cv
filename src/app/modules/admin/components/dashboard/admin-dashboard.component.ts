import { Component, OnInit } from '@angular/core';
import { AdminService, AdminStats } from '../../services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
})
export class AdminDashboardComponent implements OnInit {
  stats: AdminStats | null = null;

  statCards = [
    { key: 'users',        label: 'Utilisateurs total',  icon: 'pi-users',         color: '#6366f1', bg: '#eef2ff' },
    { key: 'admins',       label: 'Administrateurs',      icon: 'pi-shield',        color: '#8b5cf6', bg: '#f5f3ff' },
    { key: 'customers',    label: 'Clients',              icon: 'pi-user',          color: '#0ea5e9', bg: '#f0f9ff' },
    { key: 'active',       label: 'Comptes actifs',       icon: 'pi-check-circle',  color: '#10b981', bg: '#ecfdf5' },
    { key: 'cvs',          label: 'CVs créés',            icon: 'pi-file-edit',     color: '#f59e0b', bg: '#fffbeb' },
    { key: 'applications', label: 'Candidatures',         icon: 'pi-briefcase',     color: '#ef4444', bg: '#fef2f2' },
  ];

  constructor(private admin: AdminService) {}

  ngOnInit(): void {
    this.admin.stats().subscribe({ next: r => this.stats = r.data });
  }

  getValue(key: string): number {
    return this.stats ? (this.stats as any)[key] : 0;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AdminService, AdminUser } from '../../services/admin.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  providers: [ConfirmationService],
})
export class AdminUsersComponent implements OnInit {
  users: AdminUser[] = [];
  isLoading = true;
  search = '';

  showCreateDialog = false;
  showEditDialog   = false;
  isSaving = false;

  selectedUser: AdminUser | null = null;

  createForm!: FormGroup;
  editForm!:   FormGroup;

  roleOptions = [
    { label: 'Customer', value: 'customer' },
    { label: 'Admin',    value: 'admin' },
  ];

  constructor(
    private admin: AdminService,
    private msg: MessageService,
    private confirm: ConfirmationService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.createForm = this.fb.group({
      name:     ['', [Validators.required, Validators.minLength(2)]],
      email:    ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      role:     ['customer', Validators.required],
    });

    this.editForm = this.fb.group({
      role: ['customer', Validators.required],
    });

    this.loadUsers();
  }

  loadUsers(): void {
    this.isLoading = true;
    this.admin.users(this.search).subscribe({
      next:  r => { this.users = r.data; this.isLoading = false; },
      error: () => { this.isLoading = false; },
    });
  }

  openCreate(): void {
    this.createForm.reset({ role: 'customer' });
    this.showCreateDialog = true;
  }

  openEdit(user: AdminUser): void {
    this.selectedUser = user;
    this.editForm.patchValue({ role: user.role });
    this.showEditDialog = true;
  }

  saveCreate(): void {
    if (this.createForm.invalid) { this.createForm.markAllAsTouched(); return; }
    this.isSaving = true;
    this.admin.createUser(this.createForm.value).subscribe({
      next: r => {
        this.users.unshift(r.data);
        this.showCreateDialog = false;
        this.isSaving = false;
        this.msg.add({ severity: 'success', summary: 'Créé', detail: 'Utilisateur ajouté.' });
      },
      error: err => {
        this.isSaving = false;
        this.msg.add({ severity: 'error', summary: 'Erreur', detail: err.error?.message || 'Erreur serveur.' });
      },
    });
  }

  saveEdit(): void {
    if (!this.selectedUser || this.editForm.invalid) return;
    this.isSaving = true;
    this.admin.updateRole(this.selectedUser.id, this.editForm.value.role).subscribe({
      next: r => {
        const idx = this.users.findIndex(u => u.id === r.data.id);
        if (idx > -1) this.users[idx] = r.data;
        this.showEditDialog = false;
        this.isSaving = false;
        this.msg.add({ severity: 'success', summary: 'Mis à jour', detail: 'Rôle modifié.' });
      },
      error: () => { this.isSaving = false; },
    });
  }

  toggle(user: AdminUser): void {
    this.admin.toggleStatus(user.id).subscribe({
      next: r => {
        const idx = this.users.findIndex(u => u.id === user.id);
        if (idx > -1) this.users[idx] = r.data;
        this.msg.add({ severity: 'info', summary: 'Statut', detail: `Compte ${r.data.is_active ? 'activé' : 'désactivé'}.` });
      },
    });
  }

  confirmDelete(user: AdminUser): void {
    this.confirm.confirm({
      message: `Supprimer <strong>${user.name}</strong> ?`,
      header:  'Confirmation',
      icon:    'pi pi-exclamation-triangle',
      accept:  () => this.doDelete(user),
    });
  }

  private doDelete(user: AdminUser): void {
    this.admin.deleteUser(user.id).subscribe({
      next: () => {
        this.users = this.users.filter(u => u.id !== user.id);
        this.msg.add({ severity: 'success', summary: 'Supprimé', detail: 'Utilisateur supprimé.' });
      },
    });
  }

  roleSeverity(role: string): 'warning' | 'info' {
    return role === 'admin' ? 'warning' : 'info';
  }

  statusSeverity(active: boolean): 'success' | 'danger' {
    return active ? 'success' : 'danger';
  }

  initials(name: string): string {
    return name.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase();
  }
}

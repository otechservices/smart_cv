import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form!: FormGroup;
  isLoading = false;
  showPassword = false;

  readonly features = [
    { icon: 'pi pi-file-edit',  label: 'Éditeur de CV en temps réel' },
    { icon: 'pi pi-sparkles',   label: 'Lettre de motivation par IA' },
    { icon: 'pi pi-briefcase',  label: 'Suivi de candidatures' },
    { icon: 'pi pi-chart-line', label: 'Statistiques & insights' },
  ];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router,
  ) {
    this.form = this.fb.group({
      email:    ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  submit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    this.isLoading = true;
    this.authService.login(this.form.value).subscribe({
      next: () => {
        const role = this.authService.getUser()?.role;
        this.router.navigate([role === 'admin' ? '/admin' : '/app/dashboard']);
      },
      error: (err) => {
        const detail = err?.error?.message ?? 'Email ou mot de passe incorrect.';
        this.messageService.add({ severity: 'error', summary: 'Connexion échouée', detail });
        this.isLoading = false;
      },
    });
  }
}

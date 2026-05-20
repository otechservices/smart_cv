import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form!: FormGroup;
  isLoading = false;
  showPassword = false;

  readonly perks = [
    '1 CV illimité dès le départ',
    '5 lettres de motivation IA / mois',
    'Suivi de candidatures intégré',
    'Accès sans carte bancaire',
  ];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router,
  ) {
    this.form = this.fb.group({
      name:     ['', [Validators.required, Validators.minLength(2)]],
      email:    ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  submit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    this.isLoading = true;
    this.authService.register(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/app/dashboard']);
      },
      error: (err) => {
        const detail = err?.error?.message ?? 'Inscription impossible. Vérifiez vos informations.';
        this.messageService.add({ severity: 'error', summary: 'Erreur', detail });
        this.isLoading = false;
      },
    });
  }
}

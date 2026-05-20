import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../../../../core/services/subscription.service';
import { Plan } from '../../../../core/interfaces/api.interfaces';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  plans: Plan[] = [];
  isLoading = true;

  readonly fallback: Plan[] = [
    { name: 'Free',    price: 'Gratuit',    features: ['1 modèle de CV', '5 lettres / mois', 'Candidatures manuelles'], isCurrent: true },
    { name: 'Premium', price: '9,99 € / mois', features: ['5 modèles de CV', '50 lettres / mois', '20 candidatures auto', 'Optimisation IA'],    isCurrent: false },
    { name: 'Pro',     price: '19,99 € / mois', features: ['Tous les modèles', 'Lettres illimitées', 'Candidatures illimitées', 'IA prioritaire'], isCurrent: false },
  ];

  constructor(private subscriptionService: SubscriptionService) {}

  ngOnInit(): void {
    this.subscriptionService.getPlans().subscribe({
      next: (res) => {
        this.plans = res.data;
        this.isLoading = false;
      },
      error: () => {
        this.plans = this.fallback;
        this.isLoading = false;
      },
    });
  }

  ctaClass(plan: Plan): string {
    if (plan.isCurrent) return 'btn-secondary';
    if (plan.name === 'Premium') return 'btn-primary';
    if (plan.name === 'Pro')     return 'btn-dark';
    return 'btn-secondary';
  }
}

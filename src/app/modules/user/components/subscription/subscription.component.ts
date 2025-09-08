import { Component, OnInit } from '@angular/core';

interface Plan {
  name: string;
  price: string;
  features: string[];
  isCurrent?: boolean;
}

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  plans: Plan[] = [
    {
      name: 'Free',
      price: '$0',
      features: ['1 CV template', '5 Cover Letters per month', 'Manual Applications only'],
      isCurrent: true
    },
    {
      name: 'Premium',
      price: '$9.99 / mo',
      features: ['5 CV templates', '50 Cover Letters per month', '20 Automated Applications', 'AI Content Optimization']
    },
    {
      name: 'Pro',
      price: '$19.99 / mo',
      features: ['All CV templates', 'Unlimited Cover Letters', 'Unlimited Automated Applications', 'Priority AI Processing']
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

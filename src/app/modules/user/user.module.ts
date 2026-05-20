import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SubscriptionComponent } from './components/subscription/subscription.component';

// PrimeNG
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TagModule } from 'primeng/tag';
import { BadgeModule } from 'primeng/badge';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  declarations: [
    SubscriptionComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ButtonModule,
    RippleModule,
    TagModule,
    BadgeModule,
    SkeletonModule,
  ]
})
export class UserModule { }

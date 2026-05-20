import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { LandingComponent } from './components/landing/landing.component';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    RippleModule,
  ],
})
export class LandingModule {}

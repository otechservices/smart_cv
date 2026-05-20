import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { ToastModule } from 'primeng/toast';

import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ButtonModule,
    RippleModule,
    TooltipModule,
    BadgeModule,
    AvatarModule,
    ToastModule,
  ],
  exports: [LayoutComponent, ToastModule]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// PrimeNG modules for layout
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TooltipModule } from 'primeng/tooltip';

import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule, // Providing HttpClient here
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    TooltipModule
  ],
  exports: [
    LayoutComponent // Export so AppModule can use it in its template
  ]
})
export class CoreModule { }

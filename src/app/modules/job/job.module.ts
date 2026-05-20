import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { JobRoutingModule } from './job-routing.module';
import { LetterComponent } from './components/letter/letter.component';
import { JobTrackingComponent } from './components/job-tracking/job-tracking.component';

// PrimeNG
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { SkeletonModule } from 'primeng/skeleton';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    LetterComponent,
    JobTrackingComponent
  ],
  imports: [
    CommonModule,
    JobRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PanelModule,
    ButtonModule,
    InputTextareaModule,
    InputTextModule,
    CardModule,
    TableModule,
    TagModule,
    RippleModule,
    TooltipModule,
    SkeletonModule,
    DialogModule,
    DropdownModule,
    QuillModule,
  ]
})
export class JobModule { }

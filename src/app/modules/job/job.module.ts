import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { JobRoutingModule } from './job-routing.module';
import { LetterComponent }       from './components/letter/letter.component';
import { JobTrackingComponent }  from './components/job-tracking/job-tracking.component';
import { JobSearchComponent }    from './components/job-search/job-search.component';
import { JobQueuePageComponent } from './components/job-queue-page/job-queue-page.component';

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
    JobTrackingComponent,
    JobSearchComponent,
    JobQueuePageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
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

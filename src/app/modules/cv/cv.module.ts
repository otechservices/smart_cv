import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CvRoutingModule } from './cv-routing.module';
import { CvListComponent } from './components/cv-list/cv-list.component';
import { CvFormComponent } from './components/cv-form/cv-form.component';
import { CvPreviewComponent } from './components/cv-preview/cv-preview.component';

// PrimeNG
import { ButtonModule }        from 'primeng/button';
import { RippleModule }        from 'primeng/ripple';
import { InputTextModule }     from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FieldsetModule }      from 'primeng/fieldset';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SkeletonModule }      from 'primeng/skeleton';
import { TooltipModule }       from 'primeng/tooltip';
import { QuillModule }         from 'ngx-quill';

@NgModule({
  declarations: [
    CvListComponent,
    CvFormComponent,
    CvPreviewComponent,
  ],
  imports: [
    CommonModule,
    CvRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    InputTextareaModule,
    FieldsetModule,
    ConfirmDialogModule,
    SkeletonModule,
    TooltipModule,
    QuillModule,
  ]
})
export class CvModule { }

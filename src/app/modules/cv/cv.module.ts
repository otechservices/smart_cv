import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CvRoutingModule } from './cv-routing.module';
import { CvFormComponent } from './components/cv-form/cv-form.component';
import { CvPreviewComponent } from './components/cv-preview/cv-preview.component';

// PrimeNG Modules
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FieldsetModule } from 'primeng/fieldset';


@NgModule({
  declarations: [
    CvFormComponent,
    CvPreviewComponent
  ],
  imports: [
    CommonModule,
    CvRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    FieldsetModule
  ]
})
export class CvModule { }

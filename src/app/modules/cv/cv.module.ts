import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CvRoutingModule }   from './cv-routing.module';
import { CvListComponent }   from './components/cv-list/cv-list.component';
import { CvFormComponent }   from './components/cv-form/cv-form.component';
import { CvPreviewComponent } from './components/cv-preview/cv-preview.component';
import { CvDesignComponent } from './components/cv-design/cv-design.component';

// PrimeNG
import { ButtonModule }        from 'primeng/button';
import { RippleModule }        from 'primeng/ripple';
import { InputTextModule }     from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FieldsetModule }      from 'primeng/fieldset';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SkeletonModule }      from 'primeng/skeleton';
import { TooltipModule }       from 'primeng/tooltip';
import { SidebarModule }       from 'primeng/sidebar';
import { QuillModule }         from 'ngx-quill';

@NgModule({
  declarations: [
    CvListComponent,
    CvFormComponent,
    CvPreviewComponent,
    CvDesignComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CvRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    InputTextareaModule,
    FieldsetModule,
    ConfirmDialogModule,
    SkeletonModule,
    TooltipModule,
    SidebarModule,
    QuillModule,
  ]
})
export class CvModule { }

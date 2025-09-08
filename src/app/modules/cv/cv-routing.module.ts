import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CvFormComponent } from './components/cv-form/cv-form.component';

const routes: Routes = [
  { path: '', component: CvFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvRoutingModule { }

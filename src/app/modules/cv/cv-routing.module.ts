import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CvListComponent } from './components/cv-list/cv-list.component';
import { CvFormComponent } from './components/cv-form/cv-form.component';

const routes: Routes = [
  { path: '',    component: CvListComponent },
  { path: ':id', component: CvFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvRoutingModule {}

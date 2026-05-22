import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CvListComponent }   from './components/cv-list/cv-list.component';
import { CvFormComponent }   from './components/cv-form/cv-form.component';
import { CvDesignComponent } from './components/cv-design/cv-design.component';

const routes: Routes = [
  { path: '',           component: CvListComponent },
  { path: ':id',        component: CvFormComponent },
  { path: ':id/design', component: CvDesignComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LetterComponent } from './components/letter/letter.component';
import { JobTrackingComponent } from './components/job-tracking/job-tracking.component';

const routes: Routes = [
  { path: '', redirectTo: 'tracking', pathMatch: 'full' },
  { path: 'letter', component: LetterComponent },
  { path: 'tracking', component: JobTrackingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }

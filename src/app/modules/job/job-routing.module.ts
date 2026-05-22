import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LetterComponent }         from './components/letter/letter.component';
import { JobTrackingComponent }    from './components/job-tracking/job-tracking.component';
import { JobSearchComponent }      from './components/job-search/job-search.component';
import { JobQueuePageComponent }   from './components/job-queue-page/job-queue-page.component';

const routes: Routes = [
  { path: '',         redirectTo: 'search', pathMatch: 'full' },
  { path: 'letter',   component: LetterComponent },
  { path: 'tracking', component: JobTrackingComponent },
  { path: 'search',   component: JobSearchComponent },
  { path: 'queue',    component: JobQueuePageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }

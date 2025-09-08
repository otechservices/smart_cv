import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubscriptionComponent } from './components/subscription/subscription.component';

const routes: Routes = [
  { path: '', redirectTo: 'subscriptions', pathMatch: 'full' },
  { path: 'subscriptions', component: SubscriptionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

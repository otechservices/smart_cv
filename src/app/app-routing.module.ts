import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent }    from './core/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LandingComponent }   from './modules/landing/components/landing/landing.component';
import { authGuard, adminGuard } from './core/guards/auth.guard';

const routes: Routes = [

  /* ── Landing (public) ─────────────────────────────────── */
  { path: '', component: LandingComponent },

  /* ── Auth (login / register) ─────────────────────────── */
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
  },

  /* ── App shell (customer) ─────────────────────────────── */
  {
    path: 'app',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '',          redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'cv',   loadChildren: () => import('./modules/cv/cv.module').then(m => m.CvModule) },
      { path: 'jobs', loadChildren: () => import('./modules/job/job.module').then(m => m.JobModule) },
      { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
    ],
  },

  /* ── Admin shell ──────────────────────────────────────── */
  {
    path: 'admin',
    canActivate: [adminGuard],
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
  },

  /* ── Fallback ─────────────────────────────────────────── */
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

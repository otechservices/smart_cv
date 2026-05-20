import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { guestGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
  { path: '',        redirectTo: 'login', pathMatch: 'full' },
  { path: 'login',    component: LoginComponent,    canActivate: [guestGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [guestGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

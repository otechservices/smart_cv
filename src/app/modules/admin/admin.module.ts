import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule }       from 'primeng/button';
import { RippleModule }       from 'primeng/ripple';
import { InputTextModule }    from 'primeng/inputtext';
import { TableModule }        from 'primeng/table';
import { TagModule }          from 'primeng/tag';
import { DialogModule }       from 'primeng/dialog';
import { DropdownModule }     from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TooltipModule }      from 'primeng/tooltip';

import { AdminRoutingModule }        from './admin-routing.module';
import { AdminLayoutComponent }      from './layout/admin-layout.component';
import { AdminDashboardComponent }   from './components/dashboard/admin-dashboard.component';
import { AdminUsersComponent }       from './components/users/admin-users.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminDashboardComponent,
    AdminUsersComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    TableModule,
    TagModule,
    DialogModule,
    DropdownModule,
    ConfirmDialogModule,
    TooltipModule,
  ],
})
export class AdminModule {}

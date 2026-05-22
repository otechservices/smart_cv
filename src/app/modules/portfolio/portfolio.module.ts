import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioPageComponent } from './portfolio-page.component';

const routes: Routes = [
  { path: '', component: PortfolioPageComponent },
];

@NgModule({
  declarations: [PortfolioPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PortfolioModule {}

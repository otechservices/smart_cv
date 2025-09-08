import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Example of exporting a PrimeNG module that will be used in many places
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    CommonModule,
    ButtonModule // Export it so other modules that import SharedModule can use p-button
  ]
})
export class SharedModule { }

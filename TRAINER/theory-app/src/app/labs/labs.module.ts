import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabsStartComponent } from './labs-start/labs-start.component';


@NgModule({
  declarations: [LabsStartComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LabsStartComponent
  ]
})
export class LabsModule { }

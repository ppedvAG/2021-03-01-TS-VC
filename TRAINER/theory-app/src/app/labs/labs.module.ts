import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabsStartComponent } from './labs-start/labs-start.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { TimeComponent } from './time/time.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [LabsStartComponent, LifecycleComponent, TimeComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    LabsStartComponent
  ]
})
export class LabsModule { }

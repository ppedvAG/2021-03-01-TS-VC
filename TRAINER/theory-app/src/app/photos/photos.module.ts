import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosStartComponent } from './photos-start/photos-start.component';



@NgModule({
  declarations: [PhotosStartComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PhotosStartComponent
  ]
})
export class PhotosModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosStartComponent } from './photos-start/photos-start.component';
import { PhotoAlbumComponent } from './photo-album/photo-album.component';
import { PhotoComponent } from './photo/photo.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [PhotosStartComponent, PhotoAlbumComponent, PhotoComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    PhotosStartComponent
  ]
})
export class PhotosModule { }

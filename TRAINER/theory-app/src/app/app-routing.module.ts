import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabsStartComponent } from './labs/labs-start/labs-start.component';
import { LifecycleComponent } from './labs/lifecycle/lifecycle.component';
import { TimeComponent } from './labs/time/time.component';
import { PhotosStartComponent } from './photos/photos-start/photos-start.component';

const routes: Routes = [
  {path: 'labs', component: LabsStartComponent, children: [
    {path: 'lifecycle', component: LifecycleComponent},
    {path: 'time', component: TimeComponent}
  ]},
  {path: 'photos', component: PhotosStartComponent},
  {path: 'home', redirectTo: '/' },
  {path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

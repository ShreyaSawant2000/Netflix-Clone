import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NetflixHomeComponent } from './netflix-home/netflix-home.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';

const routes: Routes = [
  {path:'',
  component:NetflixHomeComponent},
  {path:'image',
  component:ImageGalleryComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NetflixHomeComponent } from './netflix-home/netflix-home.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ImgComComponent } from './img-com/img-com.component';
import { SmallImgComponent } from './small-img/small-img.component';


@NgModule({
  declarations: [
    AppComponent,
    NetflixHomeComponent,
    ImageGalleryComponent,
    ImgComComponent,
    SmallImgComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

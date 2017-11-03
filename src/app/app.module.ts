import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { GalleryModule, GalleryConfig } from 'ng-gallery';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';

import { PostsService } from './posts.service';
import { FlickrService } from './gallery/flickr.service';

export const galleryConfig: GalleryConfig = {
  'style': {
    'background': 'rgba(25,25,25,0.8)',
    'width': '100%',
    'height': '100%'
  },
  'animation': 'fade',
  'thumbnails': {
    'position': 'top',
    'space': 20,
    'width': 180,
    'height': 135
  },
  'navigation': true,
  'gestures': true
};

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NavComponent,
    HomeComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CollapseModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    GalleryModule.forRoot(galleryConfig)
  ],
  providers: [
    PostsService,
    FlickrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

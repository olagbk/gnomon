import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { GalleryModule } from 'ng-gallery';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SketchesComponent } from './gallery/sketches/sketches.component';
import { DrawingsComponent } from './gallery/drawings/drawings.component';

import { PostsService } from './posts.service';
import { FlickrService } from './gallery/flickr.service';
import { AlbumsService } from './gallery/albums.service';

import { galleryConfig } from './gallery/gallery.config';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NavComponent,
    HomeComponent,
    GalleryComponent,
    SketchesComponent,
    DrawingsComponent,
    PhotosComponent
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
    FlickrService,
    AlbumsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

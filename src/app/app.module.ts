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
import { PhotosComponent } from './gallery/photos/photos.component';
import { PhotoAlbumComponent } from './gallery/photos/photo-album.component';
import { PaginationComponent } from './pagination/pagination.component';

import { PostsService } from './posts/posts.service';
import { FlickrService } from './gallery/flickr.service';
import { AlbumsService } from './gallery/albums.service';

import { TimesPipe } from './pipes/times.pipe';

import { galleryConfig } from './gallery/gallery.config';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NavComponent,
    HomeComponent,
    GalleryComponent,
    SketchesComponent,
    DrawingsComponent,
    PhotosComponent,
    PaginationComponent,
    PhotoAlbumComponent,
    TimesPipe,
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

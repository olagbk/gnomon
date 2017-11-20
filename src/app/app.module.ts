import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { PaginationModule } from 'ngx-bootstrap/pagination';

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
import { AboutComponent } from './about/about.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ScrollComponent } from './scroll/scroll.component';

import { PostsService } from './posts/posts.service';
import { FlickrService } from './gallery/flickr.service';
import { AlbumsService } from './gallery/albums.service';

import { TimesPipe } from './pipes/times.pipe';

import { galleryConfig } from './gallery/gallery.config';

export function startupServiceFactory(albumsService: AlbumsService): Function {
  return () => albumsService.loadAll();
}

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
    AboutComponent,
    SpinnerComponent,
    ScrollComponent,
    TimesPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    GalleryModule.forRoot(galleryConfig)
  ],
  providers: [
    PostsService,
    FlickrService,
    AlbumsService,
    {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [AlbumsService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

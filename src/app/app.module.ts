import { APP_INITIALIZER, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { GalleryModule } from 'ng-gallery';

import { AppRoutingModule } from './app-routing.module';

import { AboutComponent } from './pages/about/about.component';
import { AlbumThumbComponent } from './pages/photos/album-thumb.component';
import { AppComponent } from './app.component';
import { DrawingsComponent } from './pages/drawings/drawings.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryThumbComponent } from './gallery/gallery-thumb.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './widgets/navbar/navbar.component';
import { PaginationComponent } from './widgets/pagination/pagination.component';
import { PhotoAlbumComponent } from './pages/photos/photo-album.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { PostsComponent } from './pages/posts/posts.component';
import { SketchesComponent } from './pages/sketches/sketches.component';
import { SpinnerComponent } from './widgets/spinner/spinner.component';
import { ScrollComponent } from './widgets/scroll/scroll.component';

import { PostsService } from './pages/posts/posts.service';
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

    NavbarComponent,
    PaginationComponent,
    SpinnerComponent,
    ScrollComponent,

    HomeComponent,
    PostsComponent,
    AboutComponent,
    SketchesComponent,
    DrawingsComponent,
    PhotosComponent,
    PhotoAlbumComponent,
    AlbumThumbComponent,

    GalleryComponent,
    GalleryThumbComponent,

    TimesPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    GalleryModule.forRoot(galleryConfig)
  ],
  providers: [
    AlbumsService,
    {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [AlbumsService],
      multi: true
    },
    FlickrService,
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

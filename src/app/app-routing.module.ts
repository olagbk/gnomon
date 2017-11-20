import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SketchesComponent } from './pages/sketches/sketches.component';
import { DrawingsComponent } from './pages/drawings/drawings.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { PhotoAlbumComponent } from './pages/photos/photo-album.component';
import { AboutComponent } from './pages/about/about.component';

const ROUTES = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
   },
  {
    path: 'drawings',
    component: DrawingsComponent
  },
  {
    path: 'sketches',
    component: SketchesComponent
  },
  {
    path: 'photos',
    component: PhotosComponent
  },
  {
    path: 'photos/:album',
    component: PhotoAlbumComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

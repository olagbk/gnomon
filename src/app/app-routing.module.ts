import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {SketchesComponent} from './gallery/sketches/sketches.component';
import {DrawingsComponent} from './gallery/drawings/drawings.component';
import {PhotosComponent} from './gallery/photos/photos.component';
import {PhotoAlbumComponent} from "./gallery/photos/photo-album.component";

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

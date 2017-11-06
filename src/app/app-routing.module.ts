import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {SketchesComponent} from './gallery/sketches/sketches.component';
import {DrawingsComponent} from './gallery/drawings/drawings.component';
import {PhotosComponent} from "./photos/photos.component";

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
    redirectTo: 'drawings/1'
  },
  {
    path: 'drawings/:page',
    component: DrawingsComponent
  },
  {
    path: 'sketches',
    redirectTo: 'sketches/1'
  },
  {
    path: 'sketches/:page',
    component: SketchesComponent
  },
  {
    path: 'photos',
    component: PhotosComponent
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

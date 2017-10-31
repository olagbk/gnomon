import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';

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
    component: GalleryComponent
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

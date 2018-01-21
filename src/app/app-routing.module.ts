// angular imports
import { Injectable, NgModule } from '@angular/core';
import { CanDeactivate, RouterModule } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// components
import { HomeComponent } from './core/pages/home/home.component';
import { SketchesComponent } from './core/pages/sketches/sketches.component';
import { DrawingsComponent } from './core/pages/drawings/drawings.component';
import { PhotosComponent } from './core/pages/photos/photos.component';
import { PhotoAlbumComponent } from './core/pages/photos/photo-album.component';
import { AboutComponent } from './core/pages/about/about.component';
import { BlogComponent } from './core/pages/blog/blog.component';
import { BlogEntryComponent } from './core/pages/blog/blog-entry.component';
import { LoginComponent } from './core/pages/login/login.component';

// guards
import { AuthGuard } from './core/auth/auth.guard';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}

export const routes = [
  {
    path: '',
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
    component: AboutComponent,
    canDeactivate: [ CanDeactivateGuard ]
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'blog/:id',
    component: BlogEntryComponent
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canLoad: [ AuthGuard ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    CanDeactivateGuard
  ],
  declarations: []
})
export class AppRoutingModule { }

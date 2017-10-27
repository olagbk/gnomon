import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PostsComponent } from './posts/posts.component';
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
    path: 'posts',
    component: PostsComponent
  }
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

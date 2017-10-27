import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';


import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { NavComponent } from './nav/nav.component';

import {PostsService} from './posts.service';

const ROUTES = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    CollapseModule.forRoot()
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

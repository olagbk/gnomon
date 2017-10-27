import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';

import { PostsService } from './posts.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CollapseModule.forRoot(),
    AppRoutingModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

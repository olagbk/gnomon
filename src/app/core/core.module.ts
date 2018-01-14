// angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// third party modules
import { DisqusModule } from 'ngx-disqus';
import { EllipsisModule } from 'ngx-ellipsis';
import { GalleryModule } from 'ng-gallery';
import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

// bootstrap modules
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { PopoverModule } from 'ngx-bootstrap/popover';

// application modules
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';

// components
import { AboutComponent } from './pages/about/about.component';
import { AlbumThumbComponent } from './pages/photos/album-thumb.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogEntryComponent } from './pages/blog/blog-entry.component';
import { ContactFormComponent } from './widgets/contact-form/contact-form.component';
import { DrawingsComponent } from './pages/drawings/drawings.component';
import { LoginComponent } from './pages/login/login.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryThumbComponent } from './gallery/gallery-thumb.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './widgets/navbar/navbar.component';
import { PhotoAlbumComponent } from './pages/photos/photo-album.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { SketchesComponent } from './pages/sketches/sketches.component';
import { TagsComponent } from './widgets/tags/tags.component';

// services
import { AuthService } from './auth.service';
import { AlbumsService } from './gallery/albums.service';
import { BlogService } from './pages/blog/blog.service';
import { FlickrService } from './gallery/flickr.service';
import { MailerService } from './widgets/contact-form/mailer.service';

// pipes
import { TagSortPipe } from './widgets/tags/sort.pipe';

// config
import { galleryConfig } from './gallery/gallery.config';

const declarations: Array<any> = [
  NavbarComponent,
  ContactFormComponent,
  TagsComponent,

  GalleryComponent,
  GalleryThumbComponent,

  HomeComponent,
  BlogComponent,
  BlogEntryComponent,
  SketchesComponent,
  DrawingsComponent,
  PhotosComponent,
  PhotoAlbumComponent,
  AlbumThumbComponent,
  AboutComponent,
  LoginComponent,

  TagSortPipe
];
const imports: Array<any> = [
  CoreRoutingModule,
  SharedModule,

  CommonModule,
  BrowserAnimationsModule,
  EllipsisModule,
  CollapseModule.forRoot(),
  DisqusModule.forRoot('gnomon'),
  PopoverModule.forRoot(),
  GalleryModule.forRoot(galleryConfig),
  RecaptchaModule.forRoot(),
  RecaptchaFormsModule
];
const providers: Array<any> = [
  AuthService,
  AlbumsService,
  BlogService,
  FlickrService,
  MailerService,
  {
    provide: RECAPTCHA_SETTINGS,
    useValue: { siteKey: '6LfB2jkUAAAAAAM_uaJSpcoLZk3mEe1Sh17ShDcN' } as RecaptchaSettings,
  },
];
@NgModule({
  imports: imports,
  declarations: declarations,
  exports: declarations.concat(CoreRoutingModule),
  providers: providers
})
export class CoreModule { }

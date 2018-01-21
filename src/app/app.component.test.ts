// testing tools
import { should } from 'chai';

// angular imports
import { TestBed, fakeAsync, tick, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './core/pages/home/home.component';
import { SketchesComponent } from './core/pages/sketches/sketches.component';
import { DrawingsComponent } from './core/pages/drawings/drawings.component';
import { PhotosComponent } from './core/pages/photos/photos.component';
import { PhotoAlbumComponent } from './core/pages/photos/photo-album.component';
import { AboutComponent } from './core/pages/about/about.component';
import { BlogComponent } from './core/pages/blog/blog.component';
import { BlogEntryComponent } from './core/pages/blog/blog-entry.component';
import { LoginComponent } from './core/pages/login/login.component';

// routes
import { routes } from './app-routing.module';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    should().exist(component);
  });

  it('should not show background until fully loaded', () => {
    const wrapperEl = fixture.debugElement.query(By.css('.background-wrapper'));
    const imageEl = fixture.debugElement.query(By.css('img'));

    wrapperEl.styles['background-image'].should.equal('url(undefined)');
    imageEl.properties.src.should.equal('../assets/gnomon.png');
    should().exist(imageEl.attributes.hidden);
  });

  it('should set background image when fully loaded', () => {
    const wrapperEl = fixture.debugElement.query(By.css('.background-wrapper'));
    const imageEl = fixture.debugElement.query(By.css('img'));

    imageEl.triggerEventHandler('load', null);
    fixture.detectChanges();

    wrapperEl.styles['background-image'].should.equal('url(../assets/gnomon.png)');
  });

  it('should show spinner until background is loaded', () => {
    let spinnerEl = fixture.debugElement.query(By.css('app-spinner'));
    const imageEl = fixture.debugElement.query(By.css('img'));

    should().exist(spinnerEl);

    imageEl.triggerEventHandler('load', null);
    fixture.detectChanges();
    spinnerEl = fixture.debugElement.query(By.css('app-spinner'));

    should().not.exist(spinnerEl);
  });
  it('should display navigation, footer and main content once the background is loaded', () => {
    let navEl;
    let outletEl;
    let footerEl;
    function setPageElements() {
      navEl = fixture.debugElement.query(By.css('app-navbar'));
      outletEl = fixture.debugElement.query(By.css('router-outlet'));
      footerEl = fixture.debugElement.query(By.css('footer'));
    }
    setPageElements();

    should().not.exist(navEl);
    should().not.exist(outletEl);
    should().not.exist(footerEl);

    component.backgroundUrl = '../assets/gnomon.png';
    fixture.detectChanges();
    setPageElements();

    should().exist(navEl);
    should().exist(outletEl);
    should().exist(footerEl);
  });
  it('footer should contain current year and copyright symbol', () => {
    const date = new Date();
    const year = date.getFullYear();
    let footerEl;

    component.backgroundUrl = '../assets/gnomon.png';
    fixture.detectChanges();

    footerEl = fixture.debugElement.query(By.css('footer'));

    footerEl.nativeElement.textContent.should.include(year);
    footerEl.nativeElement.textContent.should.include('\u00A9');
  });
});

describe('App routing', () => {

  let fixture: ComponentFixture<AppComponent>;
  let router: Router;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        FormsModule
      ],
      declarations: [
        AppComponent,
        HomeComponent,
        DrawingsComponent,
        SketchesComponent,
        PhotosComponent,
        PhotoAlbumComponent,
        AboutComponent,
        BlogComponent,
        BlogEntryComponent,
        LoginComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });
  it('navigate to "" redirects you to home', fakeAsync(() => {
    router.navigate(['']);
    tick();
    location.path().should.equal('/');
  }));
  it('navigate to non-existing path redirects you to home', fakeAsync(() => {
    router.navigate(['fakepath']);
    tick();
    location.path().should.equal('/');
  }));
  it('navigate to blog', fakeAsync(() => {
    router.navigate(['blog']);
    tick();
    location.path().should.equal('/blog');
  }));
  it('navigate to blog entry', fakeAsync(() => {
    router.navigate(['blog', '1']);
    tick();
    location.path().should.equal('/blog/1');
  }));
  it('navigate to drawings', fakeAsync(() => {
    router.navigate(['drawings']);
    tick();
    location.path().should.equal('/drawings');
  }));
  it('navigate to sketches', fakeAsync(() => {
    router.navigate(['sketches']);
    tick();
    location.path().should.equal('/sketches');
  }));
  it('navigate to photos', fakeAsync(() => {
    router.navigate(['photos']);
    tick();
    location.path().should.equal('/photos');
  }));
  it('navigate to photo album', fakeAsync(() => {
    router.navigate(['photos', '123456']);
    tick();
    location.path().should.equal('/photos/123456');
  }));
  it('navigate to about page', fakeAsync(() => {
    router.navigate(['about']);
    tick();
    location.path().should.equal('/about');
  }));
});

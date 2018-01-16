/* tslint:disable:no-unused-expression */

// testing tools
import { should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import * as sinon from 'sinon';

// angular imports
import { tick, fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

// stubs
import { ActivatedRouteStub } from '../../../test/routing.stubs';
import { GalleryServiceStub } from '../../../test/third-party.stubs';
import { FlickrServiceStub } from '../../../test/service.stubs';

// dependencies
import { GalleryService } from 'ng-gallery';
import { FlickrService } from './flickr.service';

// components
import { GalleryComponent } from './gallery.component';

use(chaiAsPromised);

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  let flickr: FlickrServiceStub;
  let activatedRoute: ActivatedRouteStub;

  beforeEach(() => {
    localStorage.removeItem('galleryPerPage');

    TestBed.configureTestingModule({
      declarations: [ GalleryComponent ],
      imports: [ HttpModule ],
      providers: [
        { provide: GalleryService, useClass: GalleryServiceStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
        { provide: FlickrService, useClass: FlickrServiceStub }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    flickr = TestBed.get(FlickrService);
    activatedRoute = TestBed.get(ActivatedRoute);
    activatedRoute.testQueryParams = {};
    fixture.detectChanges();

  });

  it('should be created', () => {
    should().exist(component);
  });
  it('should display first page by default', () => {
    component.currentPage.should.equal(1);
  });
  it('should update when user navigates to another page', () => {
    activatedRoute.testQueryParams = {page: 3};
    component.currentPage.should.equal(3);
  });
  it('should update when user changes number of items per page', fakeAsync(() => {
    component.galleryLoaded = true;
    fixture.detectChanges();
    const pageChangedSpy = sinon.spy(component, 'perPageChange');
    const perPage = 92;
    const paginationEl = fixture.debugElement.query(By.css('app-pagination'));
    paginationEl.triggerEventHandler('perPageChanged', {perPage: perPage, currentPage: 3});
    tick();
    fixture.detectChanges();
    const thumbEls = fixture.debugElement.queryAll(By.css('app-gallery-thumb'));

    pageChangedSpy.called.should.be.true;
    component.currentPage.should.equal(3);
    component.perPage.should.equal(perPage);
    component.images.length.should.equal(perPage);
    thumbEls.length.should.equal(perPage);
  }));
  it('should save items per page number in localStorage', fakeAsync(() => {
    const perPage = 48;
    component.perPageChange({perPage: perPage});
    tick();
    const currentPerPage = localStorage.getItem('galleryPerPage');
    component.ngOnInit();

    should().exist(currentPerPage);
    component.perPage.should.equal(perPage);
    Number(currentPerPage).should.equal(perPage);

    localStorage.removeItem('galleryPerPage');
    component.ngOnInit();
    component.perPage.should.equal(24);
  }));
  it('should send required params to flickr service', () => {
    const spy = sinon.spy(flickr, 'getImages');
    const opts = {page: component.currentPage, perPage: component.perPage, album: component.album};
    component.getImages();
    spy.lastCall.args[0].should.deep.equal(opts);
  });
  it('should send another request if page was out of scope', fakeAsync(() => {
    flickr.error = 404;
    component.currentPage = 5;
    component.getImages();

    const spy = sinon.spy(component, 'getImages');
    tick();

    spy.calledOnce.should.be.true;
    component.currentPage.should.equal(1);
    component.galleryError.should.equal(false);
  }));
  it('should display error message when images are not retrieved', fakeAsync(() => {
    let messageEl = fixture.debugElement.query(By.css('.error-message'));
    should().not.exist(messageEl);

    flickr.error = 500;
    component.currentPage = 2;
    component.getImages();
    tick();
    fixture.detectChanges();

    messageEl = fixture.debugElement.query(By.css('.error-message'));
    should().exist(messageEl);
  }));
  it('should display spinner until gallery is loaded', fakeAsync(() => {
    let spinnerEl;
    spinnerEl = fixture.debugElement.query(By.css('app-spinner'));
    should().exist(spinnerEl);

    component.getImages();
    tick();
    fixture.detectChanges();
    spinnerEl = fixture.debugElement.query(By.css('app-spinner'));
    should().not.exist(spinnerEl);
  }));
  it('should emit an event when gallery is loaded', fakeAsync(() => {
    const spy = sinon.spy(component.onGalleryLoaded, 'emit');
    component.getImages();
    tick();
    spy.calledOnce.should.be.true;
  }));
});

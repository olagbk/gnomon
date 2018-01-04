import { should } from 'chai';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub, GalleryStubComponent, RouterLinkStubDirective } from '../../../../test/stubs/client';

import { PhotoAlbumComponent } from './photo-album.component';

describe('PhotoAlbumComponent', () => {
  let component: PhotoAlbumComponent;
  let fixture: ComponentFixture<PhotoAlbumComponent>;
  let activatedRoute: ActivatedRouteStub;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoAlbumComponent, RouterLinkStubDirective, GalleryStubComponent ],
      providers: [{provide: ActivatedRoute, useClass: ActivatedRouteStub}]
    });
    activatedRoute = TestBed.get(ActivatedRoute);
    activatedRoute.testParams = { album: '123456' };

    fixture = TestBed.createComponent(PhotoAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    should().exist(component);
  });
  it('should pass album id to gallery component', () => {
    const galleryEl = fixture.debugElement.query(By.css('app-gallery'));
    const galleryC = galleryEl.componentInstance;
    galleryC.album.should.equal(component.album);
  });
  it('should navigate back to photos page when link is clicked', () => {
    const linkEl = fixture.debugElement.query(By.css('a'));
    const linkD = linkEl.injector.get(RouterLinkStubDirective);
    linkEl.triggerEventHandler('click', null);
    linkD.navigatedTo.should.equal('/photos');
  });
});

import { should } from 'chai';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumsService } from '../../gallery/albums.service';
import { AlbumThumbComponent } from './album-thumb.component';
import { AlbumsServiceStub } from '../../../../test/stubs/client';
import { PhotosComponent } from './photos.component';
import {By} from '@angular/platform-browser';

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;
  let albums: AlbumsServiceStub;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosComponent, AlbumThumbComponent ],
      providers: [{provide: AlbumsService, useClass: AlbumsServiceStub}],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
    albums = TestBed.get(AlbumsService);
    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should be created', () => {
    should().exist(component);
  });
  it('should show spinner until the albums are loaded', () => {
    let spinnerEl;
    spinnerEl = fixture.debugElement.query(By.css('app-spinner'));
    should().exist(spinnerEl);
    component.albumsLoaded = true;
    fixture.detectChanges();
    spinnerEl = fixture.debugElement.query(By.css('app-spinner'));
    should().not.exist(spinnerEl);
  });
  it('should hide album thumbnails until all images are loaded', () => {
    let thumbsEl;
    thumbsEl = fixture.debugElement.query(By.css('div'));
    thumbsEl.styles.visibility.should.equal('hidden');
    component.albumsLoaded = true;
    fixture.detectChanges();
    thumbsEl.styles.visibility.should.equal('visible');
  });
  it('should show thumbnails when all images are loaded', () => {
    const thumbEls = fixture.debugElement.queryAll(By.css('app-album-thumb'));
    for (const thumbEl of thumbEls) {
      thumbEl.triggerEventHandler('addBackground', null);
    }
    component.albumsLoaded.should.equal(true);
  });
  it('should show thumbnails for all albums', () => {
    const thumbEls = fixture.debugElement.queryAll(By.css('app-album-thumb'));
    thumbEls.length.should.equal(albums.getPhotos().length);
  });
  it('should pass album id to album thumb component as input', () => {
    const thumbEl = fixture.debugElement.query(By.css('app-album-thumb'));
    const thumbC = thumbEl.componentInstance;
    thumbC.album.should.equal(component.albums[0]);
  });
});

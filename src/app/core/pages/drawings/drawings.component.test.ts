// testing tools
import { should } from 'chai';

// angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

// stubs
import { AlbumsServiceStub } from '../../../../test/service.stubs';
import { GalleryStubComponent } from '../../../../test/component.stubs';

// dependencies
import { AlbumsService } from '../../gallery/albums.service';

// components
import { DrawingsComponent } from './drawings.component';

describe('DrawingsComponent', () => {
  let component: DrawingsComponent;
  let fixture: ComponentFixture<DrawingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawingsComponent, GalleryStubComponent ],
      providers: [{provide: AlbumsService, useClass: AlbumsServiceStub}]
    });
    fixture = TestBed.createComponent(DrawingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    should().exist(component);
  });
  it('should fetch the album on init', () => {
    component.album.type.should.equal('drawings');
  });
  it('should pass album id to gallery component', () => {
    const galleryEl = fixture.debugElement.query(By.css('app-gallery'));
    const galleryC = galleryEl.componentInstance;
    galleryC.album.should.equal(component.album.albumId);
  });
});

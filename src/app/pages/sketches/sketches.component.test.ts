import { should } from 'chai';
import { ComponentFixture, TestBed} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SketchesComponent } from './sketches.component';
import { AlbumsService } from '../../gallery/albums.service';
import { AlbumsServiceStub, GalleryStubComponent } from '../../../../test/stubs';

describe('SketchesComponent', () => {
  let component: SketchesComponent;
  let fixture: ComponentFixture<SketchesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ SketchesComponent, GalleryStubComponent ],
      providers: [{provide: AlbumsService, useClass: AlbumsServiceStub}]
    });
    fixture = TestBed.createComponent(SketchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    should().exist(component);
  });
  it('should fetch the album on init', () => {
    component.album.type.should.equal('sketches');
  });
  it('should pass album id to gallery component', () => {
    const galleryEl = fixture.debugElement.query(By.css('app-gallery'));
    const galleryC = galleryEl.componentInstance;
    galleryC.album.should.equal(component.album.album_id);
  });
});

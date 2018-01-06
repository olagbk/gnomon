/* tslint:disable:no-unused-expression */

import { should } from 'chai';
import * as sinon from 'sinon';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { GalleryServiceStub } from '../../../../test/stubs/client';
import { GalleryService } from 'ng-gallery';
import { GalleryThumbComponent } from './gallery-thumb.component';

describe('GalleryThumbComponent', () => {
  let component: GalleryThumbComponent;
  let fixture: ComponentFixture<GalleryThumbComponent>;
  let gallery: GalleryServiceStub;
  let thumbEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryThumbComponent ],
      providers: [
        {provide: GalleryService, useClass: GalleryServiceStub}
      ]
    });
    fixture = TestBed.createComponent(GalleryThumbComponent);
    gallery = TestBed.get(GalleryService);
    thumbEl = fixture.debugElement.query(By.css('.image-frame'));
    component = fixture.componentInstance;
    component.image = {src: '.././../assets/gnomon.png', thumbnail: '.././../assets/gnomon.png', text: 'gnomon'};
    fixture.detectChanges();
  });

  it('should be created', () => {
    should().exist(component);
  });
  it('should have thumbnail image as background', () => {
    thumbEl.styles['background-image'].should.equal(`url(${component.image.thumbnail})`);
  });
  it('should open gallery when user clicks a thumbnail', () => {
    const gallerySpy = sinon.spy(gallery, 'set');
    thumbEl.triggerEventHandler('click', null);
    gallerySpy.called.should.be.true;
  });
});

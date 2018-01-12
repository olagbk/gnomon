// testing tools
import { should } from 'chai';
import * as sinon from 'sinon';

// angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

// stubs
import { RouterLinkStubDirective } from '../../../../test/routing.stubs';

// components
import { AlbumThumbComponent } from './album-thumb.component';

describe('AlbumThumbComponent', () => {
  let component: AlbumThumbComponent;
  let fixture: ComponentFixture<AlbumThumbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumThumbComponent, RouterLinkStubDirective ]
    });
    fixture = TestBed.createComponent(AlbumThumbComponent);
    component = fixture.componentInstance;
    component.album = {
      type: 'photos',
      name: 'weird / creepy / dead',
      albumId: '72157642924012913',
      filename: 'weird.jpg'
    };
    fixture.detectChanges();
  });

  it('should be created', () => {
    should().exist(component);
  });
  it('should display the name of the album', () => {
    const nameEl = fixture.debugElement.query(By.css('p'));
    nameEl.nativeElement.textContent.should.equal(component.album.name);
  });
  it('should navigate to gallery when thumbnail is clicked', () => {
    const linkEl = fixture.debugElement.query(By.css('a'));
    const linkD = linkEl.injector.get(RouterLinkStubDirective);
    linkEl.triggerEventHandler('click', null);
    linkD.navigatedTo.should.equal(component.album.albumId);
  });
  it('should set background once the image loads', () => {
    const emitSpy = sinon.spy(component.addBackground, 'emit');
    const thumbEl = fixture.debugElement.query(By.css('div'));
    const imageEl = fixture.debugElement.query(By.css('img'));
    should().not.exist(thumbEl.styles.backgroundImage);
    should().exist(imageEl.attributes.hidden);

    imageEl.triggerEventHandler('load', thumbEl);
    emitSpy.called.should.equal(true);
    thumbEl.styles.backgroundImage.should.include(`${component.album.filename}`);
  });
});

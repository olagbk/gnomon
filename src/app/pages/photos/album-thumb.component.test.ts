import { should } from 'chai';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkStubDirective } from '../../../../test/stubs';
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
      album_id: '72157642924012913',
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
    linkD.navigatedTo.should.equal(component.album.album_id);
  });
  it('should set background once the image loads', () => {
    const thumbEl = fixture.debugElement.query(By.css('div'));
    const imageEl = fixture.debugElement.query(By.css('img'));
    should().not.exist(thumbEl.styles.backgroundImage);
    should().exist(imageEl.attributes.hidden);

    imageEl.triggerEventHandler('load', thumbEl);
    thumbEl.styles.backgroundImage.should.include(`${component.album.filename}`);
  });
});

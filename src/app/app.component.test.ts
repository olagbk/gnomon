import { should } from 'chai';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
  }));
  beforeEach(() => {
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
  it('should scroll to top when user navigates away', () => {
    component.backgroundUrl = '../assets/gnomon.png';
    fixture.detectChanges();

    const window = fixture.nativeElement.ownerDocument.defaultView;
    const outletEl = fixture.debugElement.query(By.css('router-outlet'));

    window.scrollTo(300, 300);
    outletEl.triggerEventHandler('deactivate', null);

    window.scrollX.should.equal(0);
    window.scrollY.should.equal(0);
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

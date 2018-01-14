// testing tools
import { should } from 'chai';

// angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

// components
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    should().exist(component);
  });
  it('should show spinner until image is loaded', () => {
    const spinnerEl = fixture.debugElement.query(By.css('.spinner'));
    const imageEl = fixture.debugElement.query(By.css('img'));
    should().exist(spinnerEl);
    spinnerEl.nativeElement.style.display.should.not.equal('none');
    imageEl.triggerEventHandler('load', null);
    fixture.detectChanges();
    spinnerEl.nativeElement.style.display.should.equal('none');
  });
});

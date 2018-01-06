import { should } from 'chai';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollComponent } from './scroll.component';

describe('ScrollComponent', () => {
  let component: ScrollComponent;
  let fixture: ComponentFixture<ScrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollComponent ]
    });
    fixture = TestBed.createComponent(ScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    should().exist(component);
  });
  it('should scroll to top when button clicked', () => {
    const window = fixture.nativeElement.ownerDocument.defaultView;
    const buttonEl = fixture.debugElement.query(By.css('a'));

    window.scrollTo(300, 300);
    buttonEl.triggerEventHandler('click', null);

    window.scrollX.should.equal(0);
    window.scrollY.should.equal(0);
  });
});

// testing tools
import { should } from 'chai';

// angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

// components
import { SpinnerComponent } from '../spinner/spinner.component';
import { SpinnerScreenComponent } from './spinner-screen.component';

describe('SpinnerScreenComponent', () => {
  let component: SpinnerScreenComponent;
  let fixture: ComponentFixture<SpinnerScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerComponent, SpinnerScreenComponent ]
    });
    fixture = TestBed.createComponent(SpinnerScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    should().exist(component);
  });
  it('should show spinner', () => {
    const spinnerEl = fixture.debugElement.query(By.directive(SpinnerComponent));
    should().exist(spinnerEl);
  });
});

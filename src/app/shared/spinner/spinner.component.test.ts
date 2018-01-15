// testing tools
import { should } from 'chai';

// angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';

// components
import { SpinnerComponent } from './spinner.component';

describe('SpinnerComponent', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerComponent ]
    });
    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    should().exist(component);
  });
});

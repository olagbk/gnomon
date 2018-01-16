/* tslint:disable:no-unused-expression */

// testing tools
import { should } from 'chai';
import * as sinon from 'sinon';

// angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

// stubs
import { MailerServiceStub } from '../../../../test/service.stubs';

// dependencies
import { MailerService } from '../../widgets/contact-form/mailer.service';

// components
import { AboutComponent } from './about.component';
import { ContactFormComponent } from '../../widgets/contact-form/contact-form.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  before(() => {
    window.confirm = () => true;
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent, ContactFormComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ FormsModule ],
      providers: [{provide: MailerService, useClass: MailerServiceStub}]
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
  it('should confirm if user navigates away before sending message', () => {
    const spy = sinon.spy(window, 'confirm');
    component.contact.form.form.markAsDirty();
    component.canDeactivate();
    spy.calledOnce.should.be.true;
  });
  it('should not guard if the user did not type anything', () => {
    component.contact.form.form.markAsTouched();
    component.canDeactivate().should.be.true;
  });
});

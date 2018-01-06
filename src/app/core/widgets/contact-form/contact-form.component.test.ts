import { should } from 'chai';
import * as sinon from 'sinon';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ContactFormComponent } from './contact-form.component';
import { MailerServiceStub } from '../../../../../test/stubs/client';
import { MailerService } from './mailer.service';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;
  let mailer: MailerServiceStub;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      providers: [ {provide: MailerService, useClass: MailerServiceStub} ],
      declarations: [ ContactFormComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
    mailer = TestBed.get(MailerService);
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    should().exist(component);
  });
  it('should toggle form visibility', () => {
    const linkEl = fixture.debugElement.query(By.css('a'));
    const formEl = fixture.debugElement.query(By.css('div'));

    linkEl.triggerEventHandler('click', null);
    fixture.detectChanges();

    linkEl.nativeElement.textContent.should.include('hide');
    formEl.properties.hidden.should.equal(false);
    component.formVisible.should.equal(true);

    linkEl.triggerEventHandler('click', null);
    fixture.detectChanges();

    linkEl.nativeElement.textContent.should.include('contact me');
    formEl.properties.hidden.should.equal(true);
    component.formVisible.should.equal(false);
  });
  it('should send email when form is submitted', fakeAsync(() => {
    const spy = sinon.spy(component, 'sendEmail');
    const formEl = fixture.debugElement.query(By.css('form'));

    formEl.triggerEventHandler('submit', component.model);
    tick();
    spy.called.should.equal(true);
    component.submitted.should.equal(true);
  }));
  it('should set processing status while email is being sent', fakeAsync(() => {
    component.processing.should.equal(false);

    const formEl = fixture.debugElement.query(By.css('form'));
    formEl.triggerEventHandler('submit', component.model);
    component.processing.should.equal(true);

    tick();
    component.processing.should.equal(false);
  }));
  it('should show a loading panel while email is being sent', () => {
    let panelEl;

    panelEl = fixture.debugElement.query(By.css('app-spinner-screen'));
    should().not.exist(panelEl);

    component.processing = true;
    fixture.detectChanges();

    panelEl = fixture.debugElement.query(By.css('app-spinner-screen'));
    should().exist(panelEl);

    component.processing = false;
    fixture.detectChanges();

    panelEl = fixture.debugElement.query(By.css('app-spinner-screen'));
    should().not.exist(panelEl);
  });
  it('should hide form and show message after it has been submitted', () => {
    let messageEl, formEl;
    messageEl = fixture.debugElement.query(By.css('p'));
    should().not.exist(messageEl);

    component.formVisible = true;
    component.submitted = true;
    fixture.detectChanges();

    formEl = fixture.debugElement.query(By.css('div'));
    messageEl = fixture.debugElement.query(By.css('p'));

    should().not.exist(formEl);
    should().exist(messageEl);
    messageEl.nativeElement.textContent.should.include('sent');
  });
  it('should handle sending errors', fakeAsync(() => {
    mailer.error = true;
    component.sendEmail();
    tick();
    component.submitted.should.equal(false);
    component.error.should.equal(true);
  }));
  it('should hide form and show error message if failed', () => {
    let messageEl, formEl;

    component.formVisible = true;
    fixture.detectChanges();

    formEl = fixture.debugElement.query(By.css('div'));
    messageEl = fixture.debugElement.query(By.css('p'));

    should().exist(formEl);
    should().not.exist(messageEl);

    component.error = true;
    fixture.detectChanges();

    formEl = fixture.debugElement.query(By.css('div'));
    messageEl = fixture.debugElement.query(By.css('p'));

    should().not.exist(formEl);
    should().exist(messageEl);
    messageEl.nativeElement.textContent.should.include('wrong');
  });
  it('should disable submit button until all fields are filled', () => {
    component.formVisible = true;
    fixture.detectChanges();

    const form = fixture.debugElement.query(By.css('form')).references.contactForm;

    const buttonEl = fixture.debugElement.query(By.css('button'));
    const inputEls = fixture.debugElement.queryAll(By.css('input'));
    const textareaEl = fixture.debugElement.query(By.css('textarea'));
    const captchaEl = fixture.debugElement.query(By.css('re-captcha'));

    should().exist(inputEls[0].attributes.required);
    should().exist(inputEls[1].attributes.required);
    should().exist(inputEls[2].attributes.required);
    should().exist(textareaEl.attributes.required);
    should().exist(captchaEl.attributes.required);
    form.valid.should.equal(false);
    buttonEl.properties.disabled.should.equal(true);

    form.controls.name.setValue('name');
    form.controls.email.setValue('name@gmail.com');
    form.controls.subject.setValue('subject');
    form.controls.message.setValue('message');
    form.controls.captcha.setValue('valid');

    fixture.detectChanges();

    form.valid.should.equal(true);
    buttonEl.properties.disabled.should.equal(false);
  });
  it('should show a popover when hovering over disabled button', () => {
    component.formVisible = true;
    fixture.detectChanges();

    const popoverWrapperEl = fixture.debugElement.query(By.css('.popover-wrapper'));
    popoverWrapperEl.nativeElement.previousElementSibling.className.should.include('submit-button');
    should().exist(popoverWrapperEl.attributes.popover);
    popoverWrapperEl.attributes.triggers.should.equal('mouseenter:mouseleave');
  });
});

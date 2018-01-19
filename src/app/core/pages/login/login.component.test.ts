/* tslint:disable:no-unused-expression */

// testing tools
import { should } from 'chai';
import * as sinon from 'sinon';

// angular imports
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

// stubs
import { AuthServiceStub } from '../../../../test/service.stubs';
import { ActivatedRouteStub, RouterStub } from '../../../../test/routing.stubs';

// dependencies
import { AuthService } from '../../auth/auth.service';

// components
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let auth: AuthServiceStub;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ FormsModule ],
      providers: [{
        provide: AuthService, useClass: AuthServiceStub
      }, {
        provide: Router, useClass: RouterStub
      }, {
        provide: ActivatedRoute, useClass: ActivatedRouteStub
      }],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
    auth = TestBed.get(AuthService);

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    should().exist(component);
  });
  it('should log out the user on init', () => {
    const spy = sinon.spy(auth, 'logout');
    component.ngOnInit();
    spy.calledOnce.should.equal(true);
  });
  it('should not submit the form without password', () => {
    const spy = sinon.spy(component, 'login');
    const formEl = fixture.debugElement.query(By.css('form'));
    formEl.triggerEventHandler('submit', component.model);
    spy.called.should.equal(false);
  });
  it('should show message when submitted and no password', () => {
    let msgEl = fixture.debugElement.query(By.css('.help-block'));
    should().not.exist(msgEl);

    const formEl = fixture.debugElement.query(By.css('form'));
    formEl.triggerEventHandler('submit', component.model);
    fixture.detectChanges();
    msgEl = fixture.debugElement.query(By.css('.help-block'));
    should().exist(msgEl);

    formEl.references.f.controls.password.setValue('password');
    fixture.detectChanges();
    msgEl = fixture.debugElement.query(By.css('.help-block'));
    should().not.exist(msgEl);
  });
  it('should update model with password', () => {
    const formEl = fixture.debugElement.query(By.css('form'));
    const form = formEl.references.f;
    form.controls.password.setValue('password');
    component.model.password.should.equal('password');
  });
  it('should call login when submitted', () => {
    const spy = sinon.spy(component, 'login');
    const formEl = fixture.debugElement.query(By.css('form'));
    const form = formEl.references.f;
    form.controls.password.setValue('password');
    formEl.triggerEventHandler('submit', component.model);
    spy.called.should.equal(true);
  });
  it('should send password to auth service', () => {
    const spy = sinon.spy(auth, 'login');
    component.model.password = 'passwd';
    component.login();
    spy.calledWith('passwd').should.be.true;
  });
  it('should disable button and show spinner while waiting for server response', fakeAsync(() => {
    let spinnerEl = fixture.debugElement.query(By.css('app-spinner'));
    const buttonEl = fixture.debugElement.query(By.css('button'));
    should().not.exist(spinnerEl);
    buttonEl.properties.disabled.should.be.false;

    component.login();
    fixture.detectChanges();

    spinnerEl = fixture.debugElement.query(By.css('app-spinner'));
    should().exist(spinnerEl);
    buttonEl.properties.disabled.should.be.true;

    tick();
    fixture.detectChanges();

    spinnerEl = fixture.debugElement.query(By.css('app-spinner'));
    console.log(spinnerEl);
    should().not.exist(spinnerEl);
    buttonEl.properties.disabled.should.be.false;
  }));
  it('should emit the loggedIn event when authenticated', fakeAsync(() => {
    const spy = sinon.spy(component.loggedIn, 'emit');
    component.login();
    tick();
    spy.calledOnce.should.be.true;
  }));
  it('should navigate to admin when authenticated', fakeAsync(() => {
    const router = TestBed.get(Router);
    const spy = sinon.spy(router, 'navigate');
    component.login();
    tick();
    spy.calledWith(['/admin']).should.be.true;
    spy.restore();
  }));
  it('should navigate to previous URL if forced to relog', fakeAsync(() => {
    const router = TestBed.get(Router);
    const activatedRoute = TestBed.get(ActivatedRoute);
    const spy = sinon.spy(router, 'navigate');
    activatedRoute.testQueryParams = {redirectTo: '/admin/posts/new'};
    component.login();
    tick();
    spy.called.should.be.true;
    //spy.calledWith(['/admin/post/new']).should.be.true;
  }));
  it('should not emit loggedIn and redirect if authentication fails', fakeAsync(() => {
    const router = TestBed.get(Router);
    const routerSpy = sinon.spy(router, 'navigate');
    const emitSpy = sinon.spy(component.loggedIn, 'emit');
    auth.valid = false;
    component.login();
    tick();
    routerSpy.called.should.be.false;
    emitSpy.called.should.be.false;
  }));
  it('should show error if password is incorrect', fakeAsync(() => {
    let msgEl = fixture.debugElement.query(By.css('p'));
    should().not.exist(msgEl);
    component.error.should.equal('');

    auth.valid = false;
    component.login();
    tick();
    fixture.detectChanges();

    msgEl = fixture.debugElement.query(By.css('p'));
    should().exist(msgEl);
    component.error.should.equal('Password is incorrect.');
    msgEl.nativeElement.textContent.should.equal(component.error);
  }));
});



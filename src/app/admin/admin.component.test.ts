/* tslint:disable:no-unused-expression */

// testing tools
import { should } from 'chai';
import * as sinon from 'sinon';

// angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

// stubs
import { AuthServiceStub } from '../../test/service.stubs';
import { RouterStub } from '../../test/routing.stubs';

// dependencies
import { AuthService } from '../core/auth.service';

// components
import { AdminComponent } from './admin.component';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let auth: AuthServiceStub;
  let router: RouterStub;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [{
        provide: AuthService, useClass: AuthServiceStub
      }, {
        provide: Router, useClass: RouterStub
      }]
    });
    auth = TestBed.get(AuthService);
    router = TestBed.get(Router);
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    should().exist(component);
  });
  it('should log out the user when link is clicked', () => {
    const spy = sinon.spy(auth, 'logout');
    const linkEl = fixture.debugElement.query(By.css('a'));
    linkEl.triggerEventHandler('click', null);
    spy.calledOnce.should.be.true;
  });
  it('should navigate to home after logout', () => {
    const spy = sinon.spy(router, 'navigate');
    component.logout();
    spy.calledWith(['/home']).should.be.true;
  });
});

// testing tools
import { should } from 'chai';
import * as sinon from 'sinon';

// angular imports
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

// stubs
import { RouterStub } from '../../../test/routing.stubs';

// dependencies
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    localStorage.removeItem('token');

    TestBed.configureTestingModule({
      providers: [ AuthGuard, {provide: Router, useClass: RouterStub} ],
    });
    guard = TestBed.get(AuthGuard);
  });

  it('should be created', () => {
    should().exist(guard);
  });
  it('should return true if login token exists in local storage', () => {
    localStorage.setItem('token', 'sometoken');
    const returnValue = guard.canLoad();
    returnValue.should.equal(true);
  });
  it('should return false if user is not logged in', () => {
    const returnValue = guard.canLoad();
    returnValue.should.equal(false);
  });
  it('should redirect to login page if not logged in', () => {
    const router = TestBed.get(Router);
    const spy = sinon.spy(router, 'navigate');
    guard.canLoad();
    spy.calledWith(['/login']).should.equal(true);
  });
});

/* tslint:disable:no-unused-expression */

// testing tools
import { should } from 'chai';
import * as sinon from 'sinon';

// angular imports
import { async, TestBed } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { HttpModule, Response, ResponseOptions, XHRBackend } from '@angular/http';

// dependencies
import { AuthService } from './auth.service';

describe ('Auth service', () => {

  describe('Successful login', () => {
    let service: AuthService;
    let mockBackend: MockBackend;

    beforeEach(() => {
      localStorage.removeItem('token');

      TestBed.configureTestingModule({
        imports: [ HttpModule ],
        providers: [ AuthService, { provide: XHRBackend, useClass: MockBackend } ]
      });
      service = TestBed.get(AuthService);
      mockBackend = TestBed.get(XHRBackend);

      const mockResponse = { token: 'sometoken' };
      const options = new ResponseOptions({
        body: mockResponse
      });
      const response = new Response(options);

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(response);
      });

    });
    it('should be created', () => {
      should().exist(service);
    });
    it('should send the password in request body', async(() => {
      service.login('password').then(() => {
        const body = JSON.parse(mockBackend.connectionsArray[0].request.getBody());
        body.should.have.property('password', 'password');
      });
    }));
    it('should save the token', async(() => {
      service.login('password').then(() => {
        service.token.should.equal('sometoken');
        localStorage.getItem('token').should.equal('sometoken');
      });
    }));
    it('should emit the loggedIn event', async(() => {
      const spy = sinon.spy(service.loggedIn, 'emit');
      service.login('password').then(() => {
        spy.calledWith(true).should.be.true;
      });
    }));
    it('should return true if successfully logged in', async(() => {
      service.login('password').then((res) => {
        res.should.equal(true);
      });
    }));
  });

  describe('Failed logjn', () => {
    let service: AuthService;
    let mockBackend: MockBackend;

    beforeEach(() => {
      localStorage.removeItem('token');

      TestBed.configureTestingModule({
        imports: [ HttpModule ],
        providers: [ AuthService, { provide: XHRBackend, useClass: MockBackend } ]
      });
      service = TestBed.get(AuthService);
      mockBackend = TestBed.get(XHRBackend);
    });

    it('should return false if no token is received', async(() => {
      const options = new ResponseOptions({body: {}});
      const response = new Response(options);

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(response);
      });

      service.login('password').then(res => {
        res.should.equal(false);
      });
    }));
    it('should return false if error is received', async(() => {
      mockBackend.connections.subscribe((connection) => {
        connection.mockError(new Error);
      });
      service.login('password').then(res => {
        res.should.equal(false);
      });
    }));
  });

  describe('Logout', () => {
    let service: AuthService;

    beforeEach(() => {

      TestBed.configureTestingModule({
        imports: [ HttpModule ],
        providers: [ AuthService ]
      });
      service = TestBed.get(AuthService);
      service.token = 'sometoken';
      localStorage.setItem('token', 'sometoken');
    });

    it('should clear token', () => {
      service.logout();
      should().not.exist(service.token);
      should().not.exist(localStorage.getItem('token'));
    });
    it('should emit loggedIn event', () => {
      const spy = sinon.spy(service.loggedIn, 'emit');
      service.logout();
      spy.calledWith(false).should.be.true;
    })
  });
});

'use strict';

import sinon from 'sinon';
import { authenticate } from '../routes/auth_controller';
import { mockConfig } from './stubs/config';
import { JWT } from './stubs/jwt';
import { Res } from './stubs/res';
import './migrations.js';

describe('/Auth test', () => {
  let req, res, jwt;

  beforeEach(done => {
    jwt = new JWT();
    res = new Res();
    req = {
      body: {
        password: 'password'
      }
    };
    done();
  });

  it('should respond with 401 if password is incorrect', () => {
    const sendSpy = sinon.spy(res, 'send');
    const statusSpy = sinon.spy(res, 'status');

    req.body.password = 'wrongpasswd';
    authenticate(jwt, req, res, mockConfig);

    sendSpy.calledOnce.should.be.true;
    statusSpy.calledWith(401).should.be.true;
  });

  it('should send error response if jwt sign fails', () => {
    const sendSpy = sinon.spy(res, 'send');
    const statusSpy = sinon.spy(res, 'status');

    jwt.error = new Error();
    authenticate(jwt, req, res, mockConfig);

    sendSpy.calledOnce.should.be.true;
    sendSpy.firstCall.args[0].should.be.an.instanceOf(Error);
    statusSpy.calledWith(500).should.be.true;
  });

  it('should pass options to jwt', () => {
    const spy = sinon.spy(jwt, 'sign');
    authenticate(jwt, req, res, mockConfig);

    spy.calledOnce.should.be.true;
    spy.firstCall.args.should.include(mockConfig.auth.JWTsecret);
    spy.firstCall.args.should.deep.include({expiresIn: '24h'});
  });

  it('should send token in the response', () => {
    const spy = sinon.spy(res, 'json');
    authenticate(jwt, req, res, mockConfig);

    spy.calledOnce.should.be.true;
    spy.firstCall.args[0].should.have.property('token', 'sometoken');
  })
});

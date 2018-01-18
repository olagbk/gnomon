'use strict';

import chaiHttp from 'chai-http';
import sinon from 'sinon';

import server from '~/dist/index';
import JWTService from '~/dist/services/jwt';

import MockJWT from '../stubs/jwt';
import mockConfig from '../stubs/config';

import '../migrations.js';

const chai = require('chai').use(chaiHttp);

describe('/Auth test', () => {
  let jwt;

  beforeEach(done => {
    jwt = new MockJWT();
    JWTService.useAPI(jwt);
    JWTService.useConfig(mockConfig);
    done();
  });

  it('should retrieve the token', done => {
    chai.request(server)
      .post(`/api/authenticate`)
      .send({password: 'password'})
      .end((err, res) => {

        res.status.should.equal(200);
        res.body.token.should.equal('sometoken');
        done();
      });
  });

  it('should pass options to jwt', () => {
    const spy = sinon.spy(jwt, 'sign');

    chai.request(server)
      .post(`/api/authenticate`)
      .send({password: 'password'})
      .end(() => {
        spy.calledOnce.should.be.true;
        spy.firstCall.args.should.include(mockConfig.auth.JWTsecret);
        spy.firstCall.args.should.deep.include({expiresIn: '6h'});
        done();
      });
  });

  it('should respond with 401 if password is incorrect', done => {
    chai.request(server)
      .post(`/api/authenticate`)
      .send({password: 'wrongPassword'})
      .end((err, res) => {

        should.exist(err);
        err.status.should.equal(401);
        done();
      });
  });

  it('should send error response if jwt sign fails', () => {
    jwt.signError = new Error();

    chai.request(server)
      .post(`/api/authenticate`)
      .send({password: 'password'})
      .end((err, res) => {

        should.exist(err);
        err.status.should.equal(401);
        done();
      });
  });
});

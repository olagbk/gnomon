'use strict';

import chaiHttp from 'chai-http';
import sinon from 'sinon';

import server from '~/dist/index';
import mailerService from '~/dist/services/mailer';

import MockMailer from '../stubs/emails';
import mockConfig from '../stubs/config';

import '../migrations.js';

const chai = require('chai').use(chaiHttp);

describe('/Email test', () => {
  let mailer, testEmail;

  beforeEach(done => {
    mailer = new MockMailer();
    mailerService.useAPI(mailer);
    mailerService.useConfig(mockConfig);
    testEmail = {
      name: 'yo mama',
      email: 'yomama@gmail.com',
      subject: 'sup',
      message: 'bruh'
    };
    done();
  });

  it('should create transport with correct options', done => {
    const spy = sinon.spy(mailer, 'createTransport');

    chai.request(server)
      .post(`/api/emails`)
      .send(testEmail)
      .end((err, res) => {

        spy.calledOnce.should.be.true;

        const options = spy.firstCall.args[0];
        options.should.have.keys('service', 'auth');
        options.service.should.equal('gmail');
        options.auth.user.should.equal('username');
        options.auth.pass.should.equal('password');

        done();
      });
  });

  it('should pass correct options to transporter', done => {
    const spy = sinon.spy(mailer, 'sendMail');

    chai.request(server)
      .post(`/api/emails`)
      .send(testEmail)
      .end((err, res) => {

        spy.calledOnce.should.be.true;

        const options = spy.firstCall.args[0];
        options.should.have.keys('from', 'to', 'replyTo', 'subject', 'text');
        options.from.should.equal('"yo mama" <yomama@gmail.com>');
        options.replyTo.should.equal('"yo mama" <yomama@gmail.com>');
        options.to.should.equal("somedude@gmail.com");
        options.subject.should.equal("[GNOMON] sup");
        options.text.should.equal("bruh");

        done();
      });
  });

  it('should send success response to the client', done => {
    chai.request(server)
      .post(`/api/emails`)
      .send(testEmail)
      .end((err, res) => {
        res.status.should.equal(200);
        res.body.should.equal('sent');

        done();
      });
  });

  it('send error response to the client', done => {
    sinon.stub(mailerService, 'sendEmail').returns(new Error());

    chai.request(server)
      .post(`/api/emails`)
      .send(testEmail)
      .end((err, res) => {
        should.exist(err);
        err.status.should.equal(500);

        done();
      });
  })
});

'use strict';

import sinon from 'sinon';
import { sendEmail } from '../routes/emails_controller';
import { MockMailer } from './stubs/emails';
import { mockConfig } from './stubs/config';
import { Res } from './stubs/res';
import './migrations.js';

describe('/Email test', () => {
  let req, res, mailer;

  beforeEach(done => {
    mailer = new MockMailer();
    res = new Res();
    req = {
      body: {
        name: 'yo mama',
        email: 'yomama@gmail.com',
        subject: 'sup',
        message: 'bruh'
      }
    };
    done();
  });

  it('should create transport with correct options', () => {
    const spy = sinon.spy(mailer, 'createTransport');

    sendEmail(mailer, req, res, mockConfig);
    spy.calledOnce.should.be.true;

    const options = spy.firstCall.args[0];
    options.should.have.keys('service', 'auth');
    options.service.should.equal('gmail');
    options.auth.user.should.equal('username');
    options.auth.pass.should.equal('password');
  });

  it('should pass correct options to transporter', () => {
    const spy = sinon.spy(mailer, 'sendMail');

    sendEmail(mailer, req, res, mockConfig);
    spy.calledOnce.should.be.true;

    const options = spy.firstCall.args[0];
    options.should.have.keys('from', 'to', 'replyTo', 'subject', 'text');
    options.from.should.equal('"yo mama" <yomama@gmail.com>');
    options.replyTo.should.equal('"yo mama" <yomama@gmail.com>');
    options.to.should.equal("somedude@gmail.com");
    options.subject.should.equal("[GNOMON] sup");
    options.text.should.equal("bruh");
  });

  it('should notify the client when email is sent', () => {
    const spy = sinon.spy(res, 'json');

    sendEmail(mailer, req, res, mockConfig);
    spy.calledOnce.should.be.true;
    spy.firstCall.calledWithExactly('sent').should.be.true;
  });

  it('should notify the client when error occurs', () => {
    const statusSpy = sinon.spy(res, 'status');
    const sendSpy = sinon.spy(res, 'send');
    const jsonSpy = sinon.spy(res, 'json');
    const error = new Error('something went wrong');

    mailer.error = error;
    sendEmail(mailer, req, res, mockConfig);

    statusSpy.calledOnce.should.be.true;
    sendSpy.calledOnce.should.be.true;
    jsonSpy.called.should.be.false;

    statusSpy.firstCall.calledWithExactly(500).should.be.true;
    sendSpy.firstCall.calledWithExactly(error).should.be.true;
  })
});

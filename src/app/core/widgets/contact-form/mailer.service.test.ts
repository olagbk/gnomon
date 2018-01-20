// testing tools
import { should } from 'chai';

// angular imports
import { TestBed, inject, async } from '@angular/core/testing';
import { HttpModule, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

// dependencies
import { MailerService } from './mailer.service';

// models
import { Email } from './email';

describe('MailerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        MailerService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });
  });

  it('should be created', inject([MailerService], (service: MailerService) => {
    should().exist(service);
  }));
  it('should send a request with email and captcha in body', async(inject([MailerService], (service: MailerService) => {
    const mockBackend = TestBed.get(XHRBackend);
    const mockEmail = new Email('Ola', 'ola@email.com', 'Subject', 'Message');
    const mockResponse = 'sent';
    const options = new ResponseOptions({
      body: JSON.stringify(mockResponse)
    });
    const response = new Response(options);

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(response);
    });

    service.send(mockEmail, 'mockcaptcha').then(res => {
      const body = JSON.parse(mockBackend.connectionsArray[0].request.getBody());
      body.email.should.deep.equal(mockEmail);
      body.captcha.should.equal('mockcaptcha');
      res.should.equal(mockResponse);
    });
  })));
});

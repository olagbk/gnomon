import { should } from 'chai';
import { TestBed, inject, async } from '@angular/core/testing';
import { HttpModule, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { MailerService } from './mailer.service';
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
  it('should send a server request', async(inject([MailerService], (service: MailerService) => {
    const mockBackend = TestBed.get(XHRBackend);
    const mockEmail = new Email();
    const mockResponse = 'sent';
    const options = new ResponseOptions({
      body: JSON.stringify(mockResponse)
    });
    const response = new Response(options);

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(response);
    });

    service.send(mockEmail).then(res => {
      res.should.equal(mockResponse);
    });
  })));
});

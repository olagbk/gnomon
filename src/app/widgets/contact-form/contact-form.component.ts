import { Component, OnInit } from '@angular/core';
import { Email } from './email';
import { MailerService } from './mailer.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styles: [`
    :host >>> .popover {
      background-color: rgba(0,0,0,0.9);
    }
    :host >>> .popover > .arrow:after {
      border-top-color: rgba(0,0,0,0.9);
    }
    :host >>> .popover > .popover-body {
      color: #f8f9fa
    }
    .processing-screen {
      background: rgba(0,0,0,0.9);
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 1;
    }
    .processing-screen app-spinner {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .form-group {
      padding: 0 1rem;
    }
    .button-wrapper {
      position: relative;
      width: fit-content;
      margin: auto;
    }
    .popover-wrapper {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
    .submit-button {
      font-size: 1.5rem;
      letter-spacing; 2px;
    }
    .submit-button:hover {
      background: transparent;
      color: #f8f9fa;
      border-color: #f8f9fa;
      cursor: pointer;
    }
    #message {
      height: 225px;
    }
    .ng-invalid.ng-touched[required]:not(re-captcha) {
      border-left: 6px solid #91232d;
    }
    .recaptcha {
      max-width: 100%;
      margin: 2rem 0;
      overflow: hidden;
    }
    .form-link {
      text-decoration: none;
    }
  `]
})
export class ContactFormComponent implements OnInit {
  model = new Email();
  error = false;
  processing = false;
  submitted = false;
  formVisible = false;
  captcha: string;

  constructor(private mailer: MailerService) { }

  ngOnInit() { }

  sendEmail() {
    this.processing = true;
    this.mailer.send(this.model)
      .then(res => {
        this.submitted = true;
        this.processing = false;
      })
      .catch(err => this.error = true);
  }
  toggleForm() {
    this.formVisible = !this.formVisible;
  }
}

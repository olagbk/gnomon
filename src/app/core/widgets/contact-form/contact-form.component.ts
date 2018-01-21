import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';
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
  @ViewChild('contactForm') form: NgForm;

  constructor(private mailer: MailerService) { }

  ngOnInit(): void { }

  sendEmail(): void {
    this.processing = true;
    this.mailer.send(this.model, this.captcha)
      .then(res => {
        this.submitted = true;
        this.processing = false;
      })
      .catch((err: Response) => {
        console.log(err.json());
        this.processing = false;
        this.error = true;
      });
  }
  toggleForm(): void {
    this.formVisible = !this.formVisible;
  }
}

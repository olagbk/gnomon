import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactFormComponent } from '../../widgets/contact-form/contact-form.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @ViewChild('contact') contact: ContactFormComponent;

  constructor() { }

  ngOnInit() { }

  canDeactivate(): boolean {
    if (this.contact.form && this.contact.form.dirty) {
      return confirm(`Your message has not been sent. Are you sure you want to leave this page?`);
    } else {
      return true;
    }
  }
}

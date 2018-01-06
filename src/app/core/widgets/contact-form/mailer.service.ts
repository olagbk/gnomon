import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Email } from './email';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MailerService {

  constructor(private http: Http) { }
  send(email: Email): Promise<any> {
    return this.http.post('/api/emails', email).toPromise()
      .then(response => response.json());
  }

}

import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {
  token: string;
  @Output() loggedIn: EventEmitter<boolean>;

  constructor(private http: Http) {
    // set token if saved in local storage
    this.token = localStorage.getItem('token');
    this.loggedIn = new EventEmitter(!!this.token);
  }

  login(password: string): Promise<boolean> {
    return this.http.post('/api/authenticate', { password: password }).toPromise()
      .then((response: Response) => {
        // login successful if there's a jwt token in the response
        const token = response.json() && response.json().token;
        if (token) {
          // set token property
          this.token = token;

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('token', token);
          this.loggedIn.emit(true);

          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      }).catch(err => false);
  }
  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('token');
    this.loggedIn.emit(false);
  }
}

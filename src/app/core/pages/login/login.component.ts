import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';
  @Output() loggedIn: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    // reset login status
    this.authService.logout();
  }

  login() {
    this.loading = true;
    this.error = '';
    this.authService.login(this.model.password)
      .subscribe(authorized => {
        if (authorized) {
          this.loggedIn.emit();
          this.router.navigate(['/admin']);
        } else {
          this.error = 'Password is incorrect.';
          this.loading = false;
        }
      });
  }
}

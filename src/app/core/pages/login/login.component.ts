import { Component, OnInit } from '@angular/core';
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

  constructor(
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    // reset login status
    this.authService.logout();
  }

  login() {
    this.loading = true;
    this.authService.login(this.model.password)
      .subscribe(result => {
        if (result === true) {
          // login successful
          this.router.navigate(['/admin']);
        } else {
          // login failed
          this.error = 'Password is incorrect';
          this.loading = false;
        }
      });
  }
}

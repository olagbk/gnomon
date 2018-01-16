import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../auth/auth.service';

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

  ngOnInit(): void {
    // reset login status
    this.authService.logout();
  }

  login(): void {
    this.loading = true;
    this.error = '';
    this.authService.login(this.model.password)
      .then((authorized: boolean) => {
        this.loading = false;

        if (authorized) {
          this.loggedIn.emit();
          this.router.navigate(['/admin']);
        } else {
          this.error = 'Password is incorrect.';
        }
      });
  }
}

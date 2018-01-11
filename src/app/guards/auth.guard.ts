import { Injectable } from '@angular/core';
import { Router, CanLoad } from '@angular/router';

@Injectable()
export class AuthGuard implements CanLoad {

  constructor(private router: Router) { }

  canLoad() {
    if (localStorage.getItem('token')) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  public isCollapsed: boolean;
  public isAdmin: boolean;
  public loginSubscription: Subscription;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.isCollapsed = false;
    this.isAdmin = localStorage && !!localStorage.getItem('token');
    this.loginSubscription =  this.auth.loggedIn.subscribe(isLoggedIn => this.isAdmin = isLoggedIn);
  }
  ngOnDestroy () {
    this.loginSubscription.unsubscribe();
  }
}

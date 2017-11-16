import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public isCollapsed: boolean;
  public homePage: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isCollapsed = false;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.homePage = event.urlAfterRedirects === '/home';
      }
    });
  }
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}

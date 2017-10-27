import { Component, OnInit } from '@angular/core';
import { NavRoute } from './nav-route';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public isCollapsed: boolean;
  public menu: NavRoute[];

  constructor() { }

  ngOnInit() {
    this.isCollapsed = false;
    this.menu = [
      new NavRoute('Blog', '/blog'),
      new NavRoute('Drawings', '/drawings'),
      new NavRoute('Sketches', '/sketches'),
      new NavRoute('Photographs', '/photos'),
      new NavRoute('About', '/about'),
    ];
  }
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentYear: number;
  backgroundUrl: string;
  imgPreloadUrl = '../assets/gnomon.png';

  constructor() {
    const date = new Date();
    this.currentYear = date.getFullYear();
  }

  ngOnInit() {}

  scrollToTop() {
    window.scroll(0, 0);
  }
  loggedIn() {
    console.log('logged in');
  }
}

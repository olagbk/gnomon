import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  backgroundReady: boolean;
  backgroundUrl: string;
  imgPreloadUrl = '../assets/gnomon.png';

  constructor() {}

  ngOnInit() {}

  setBackground() {
    this.backgroundUrl = this.imgPreloadUrl;
    this.backgroundReady = true;

  }
  scrollToTop() {
    window.scroll(0, 0);
  }
}

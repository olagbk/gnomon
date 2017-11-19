import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  backgroundUrl: string;
  imgPreloadUrl = '../assets/gnomon.png';

  constructor() {}

  ngOnInit() {}

  scrollToTop() {
    window.scroll(0, 0);
  }
}

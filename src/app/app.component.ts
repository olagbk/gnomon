import { Component, OnInit } from '@angular/core';
import { AlbumsService } from './gallery/albums.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Gnomon';

  constructor(private albums: AlbumsService) {}

  ngOnInit() {
    if (sessionStorage && !sessionStorage.getItem('albumData')) {
      this.albums.load()
        .then((data => {
        sessionStorage.setItem('albumData', JSON.stringify(data));
      }))
        .catch(err => console.log('album data download error: ' + err));
    }
  }
}

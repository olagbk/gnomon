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
    if (!this.albums.data) {
      this.albums.loadAll()
        .then((data => this.albums.data = data))
        .catch(err => console.log('album data download error: ' + err));
    }
  }
}

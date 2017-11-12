import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-sketches',
  templateUrl: './sketches.component.html',
  styleUrls: ['./sketches.component.scss']
})
export class SketchesComponent implements OnInit {
  album: Album;

  constructor(private albumsService: AlbumsService) {}

  ngOnInit() {
    this.albumsService.getAlbumByType('sketches').then(data => this.album = data);
  }
}

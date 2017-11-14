import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-drawings',
  templateUrl: './drawings.component.html',
  styleUrls: ['./drawings.component.scss']
})
export class DrawingsComponent implements OnInit {
  album: Album;

  constructor(private albumsService: AlbumsService) {}

  ngOnInit() {
    this.album = this.albumsService.getAlbumByType('drawings');
  }
}

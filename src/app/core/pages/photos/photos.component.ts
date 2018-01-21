import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../gallery/albums.service';
import { Album } from '../../gallery/album';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  albums: Album[];
  albumsLoaded: boolean;
  backgroundsLoaded = 0;

  constructor(private albumsService: AlbumsService) { }

  ngOnInit() {
    window.scroll(0, 0);
    this.albums = this.albumsService.getPhotos();
  }
  addThumb() {
    if (++this.backgroundsLoaded === this.albums.length) { this.albumsLoaded = true; }
  }
}

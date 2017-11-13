import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Album } from '../album';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  albums: Album[];

  constructor(private albumsService: AlbumsService) { }

  ngOnInit() {
    this.albums = this.albumsService.getPhotos();
  }

}

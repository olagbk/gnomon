import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  constructor(private albums: AlbumsService) { }

  ngOnInit() {
    this.albums.getPhotos().then(data => console.log(data));
  }

}

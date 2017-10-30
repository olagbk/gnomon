import { Component, OnInit } from '@angular/core';
import { GalleryService, GalleryImage } from 'ng-gallery';
import { FlickrService } from './flickr.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public images: GalleryImage[];

  constructor(public gallery: GalleryService, private flickr: FlickrService) { }

  ngOnInit() {
    this.flickr.getDrawings().then(images => {
      this.images = images;
      this.gallery.load(this.images);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'ng-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public images = [
    {
      src: '../../assets/gnomon.png',
      thumbnail: '../../assets/gnomon.png',
      text: 'Gnomon'
    }
    ];

  constructor(public gallery: GalleryService) { }

  ngOnInit() {
    this.gallery.load(this.images);
  }

}

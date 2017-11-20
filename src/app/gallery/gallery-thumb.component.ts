import { Component, OnInit, Input } from '@angular/core';
import {GalleryImage, GalleryService} from 'ng-gallery';

@Component({
  selector: 'app-gallery-thumb',
  templateUrl: './gallery-thumb.component.html',
  styleUrls: ['./gallery-thumb.component.scss']
})
export class GalleryThumbComponent implements OnInit {
  @Input() image: GalleryImage;
  @Input() index: number;

  constructor(private gallery: GalleryService) { }

  ngOnInit() {
  }
  openGallery() {
    this.gallery.set(this.index);
  }

}

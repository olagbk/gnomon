import { Component, OnInit, Input, Output, EventEmitter, ElementRef, Renderer2 } from '@angular/core';
import {GalleryImage, GalleryService} from 'ng-gallery';

@Component({
  selector: 'app-gallery-thumb',
  templateUrl: './gallery-thumb.component.html',
  styleUrls: ['./gallery-thumb.component.scss']
})
export class GalleryThumbComponent implements OnInit {
  @Input() image: GalleryImage;
  @Input() index: number;
  @Output() addBackground: EventEmitter<{}> = new EventEmitter();

  constructor(private gallery: GalleryService, private renderer: Renderer2) { }

  ngOnInit() {
  }
  openGallery() {
    this.gallery.set(this.index);
  }
  setBackground(el: ElementRef) {
    this.renderer.setStyle(el, 'backgroundImage', `url(${this.image.thumbnail})`);
    this.addBackground.emit();
  }

}

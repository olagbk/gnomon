import { Component, OnInit, Input, Output, EventEmitter, ElementRef, Renderer2 } from '@angular/core';
import { Album } from '../../gallery/album';

@Component({
  selector: 'app-album-thumb',
  templateUrl: './album-thumb.component.html',
  styleUrls: ['./album-thumb.component.scss']
})
export class AlbumThumbComponent implements OnInit {
  @Input() album: Album;
  @Output() addBackground: EventEmitter<{}> = new EventEmitter();
  path: string;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.path = `../../assets/${this.album.filename}`;
  }
  setBackground(el: ElementRef) {
    this.renderer.setStyle(el, 'backgroundImage', `url(${this.path})`);
    this.addBackground.emit();
  }
}

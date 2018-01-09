import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.scss']
})
export class PhotoAlbumComponent implements OnInit {
  album: string;

  constructor(private activatedRoute: ActivatedRoute, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => this.album = params.album);
  }
  showLink(el: any): void {
    el.attributes.removeNamedItem('hidden');
    this.renderer.setStyle(el, 'display', 'flex');
  }

}

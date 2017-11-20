import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../gallery/album';

@Component({
  selector: 'app-album-thumb',
  templateUrl: './album-thumb.component.html',
  styleUrls: ['./album-thumb.component.scss']
})
export class AlbumThumbComponent implements OnInit {
  @Input() album: Album;
  path: string;

  constructor() { }

  ngOnInit() {
    this.path = `../../assets/${this.album.filename}`;
  }

}

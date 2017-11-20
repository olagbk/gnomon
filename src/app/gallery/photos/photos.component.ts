import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Album } from '../album';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit, AfterViewInit {
  albums: Album[];
  albumsLoaded: boolean;

  constructor(private albumsService: AlbumsService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.albums = this.albumsService.getPhotos();
  }
  ngAfterViewInit() {
    this.albumsLoaded = true;
    this.cd.detectChanges();
  }
}

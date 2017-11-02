import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { GalleryService, GalleryImage } from 'ng-gallery';
import { FlickrService } from './flickr.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public images: GalleryImage[];
  public currentPage: number;
  public pages: number;
  public loading: boolean;
  private perPage: number;

  constructor(public gallery: GalleryService, private flickr: FlickrService, private activatedRoute: ActivatedRoute) {
    this.loading = true;
    this.perPage = 24;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.currentPage = Number(params['page']);
      this.getDrawings();
    });
  }
  getDrawings() {
    this.flickr.getDrawings({page: this.currentPage, perPage: this.perPage}).then(data => {
      this.pages = Math.ceil(data.count / this.perPage);
      this.images = data.images;
      this.gallery.load(this.images);
      this.loading = false;
    });
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GalleryService, GalleryImage } from 'ng-gallery';
import { FlickrService } from './flickr.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  perPage = 24;
  thumbsLoaded: number;
  galleryLoaded: boolean;
  galleryError: boolean;
  pages: number;
  currentPage: number;
  images: GalleryImage[];
  @Input() album: string;

  constructor(public gallery: GalleryService,
              private flickr: FlickrService,
              private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.thumbsLoaded = 0;
      this.galleryLoaded = false;
      this.galleryError = false;
      this.currentPage = Number(params['page']) || 1;
      this.getImages();
    });
  }
  getImages() {
    this.flickr.getImages({page: this.currentPage, perPage: this.perPage, album: this.album})
      .then(data => {
        this.pages = Math.ceil(data.count / this.perPage);
        this.images = data.images;
        this.gallery.load(this.images);
      })
      .catch(err => this.galleryError = true);
  }
  addThumb() {
    if (++this.thumbsLoaded === this.images.length) { this.galleryLoaded = true; }
  }
}

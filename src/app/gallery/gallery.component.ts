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
  perPage: number;
  perPageOpts = [12, 24, 48, 92];
  totalItems: number;
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
  ) {
    this.perPage = (localStorage && localStorage.getItem('galleryPerPage')) ? Number(localStorage.getItem('galleryPerPage')) : 24;
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.currentPage = Number(params['page']) || 1;
      this.getImages();
    });
  }
  getImages(): void {
    this.thumbsLoaded = 0;
    this.galleryLoaded = false;
    this.galleryError = false;
    this.flickr.getImages({page: this.currentPage, perPage: this.perPage, album: this.album})
      .then(data => {
        this.totalItems = data.count;
        this.pages = Math.ceil(data.count / this.perPage);
        this.images = data.images;
        this.gallery.load(this.images);
        this.galleryLoaded = true;
      })
      .catch(err => this.galleryError = true);
  }
  perPageChange(response: any): void {
    if (localStorage) { localStorage.setItem('galleryPerPage', String(response.perPage)); }
    this.perPage = response.perPage;
    if (response.currentPage) { this.currentPage = response.currentPage; }
    this.getImages();
  }
}

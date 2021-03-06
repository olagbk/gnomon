import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GalleryService, GalleryImage } from 'ng-gallery';
import { FlickrService } from './flickr.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  perPageOpts = [12, 24, 48, 92];
  perPage: number;
  totalPages: number;
  totalItems: number;
  galleryLoaded: boolean;
  galleryError: boolean;
  currentPage: number;
  images: GalleryImage[];
  @Input() album: string;
  @Output() onGalleryLoaded: EventEmitter<any> = new EventEmitter();

  constructor(public gallery: GalleryService,
              private flickr: FlickrService,
              private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.perPage = (localStorage && localStorage.getItem('galleryPerPage'))
      ? Number(localStorage.getItem('galleryPerPage'))
      : 24;

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.currentPage = Number(params['page']) || 1;
      this.getImages();
    });
  }
  getImages(): void {
    this.galleryLoaded = false;
    this.galleryError = false;
    this.flickr.getImages({page: this.currentPage, perPage: this.perPage, album: this.album})
      .then(data => {

        this.totalItems = data.count;
        this.totalPages = Math.ceil(data.count / this.perPage);
        this.images = data.images;
        this.gallery.load(this.images);
        this.galleryLoaded = true;
        this.onGalleryLoaded.emit();
      })
      .catch(err => {
        if (err.status === 404 && this.currentPage !== 1) {
          this.currentPage = 1;
          this.getImages();
        } else {
          this.galleryError = true;
        }
      });
  }
  perPageChange(response: any): void {
    if (localStorage) { localStorage.setItem('galleryPerPage', String(response.perPage)); }
    this.perPage = response.perPage;
    if (response.currentPage) { this.currentPage = response.currentPage; }
    this.getImages();
  }
}

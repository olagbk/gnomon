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
  loading = true;
  perPage = 24;
  message: string;
  pages: number;
  currentPage: number;
  images: GalleryImage[];
  @Input() album: string;

  constructor(public gallery: GalleryService, private flickr: FlickrService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.currentPage = Number(params['page']);
      this.message = 'Loading images...';
      this.getImages();
    });
  }
  getImages() {
    this.flickr.getImages({page: this.currentPage, perPage: this.perPage, album: this.album})
      .then(data => {
        this.pages = Math.ceil(data.count / this.perPage);
        this.images = data.images;
        this.gallery.load(this.images);
        this.loading = false;
      })
      .catch(err => this.message = `Couldn't fetch images :(`);
    }
}

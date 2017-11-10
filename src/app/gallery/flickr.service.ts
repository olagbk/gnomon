import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AlbumsService } from './albums.service';


@Injectable()
export class FlickrService {
  constructor(private http: Http, private albums: AlbumsService) { }

  static handleError(error: any): Promise<any> {
    console.log(`Gallery Service error: ${error}`);
    return Promise.reject(error.message || error);
  }
  public getImages(options) {
    if (this.albums.data) {
      const album = this.albums.data.find((item => item.type === options.album));
      options.albumID = album.album_id;
    }
    return this.http.get('/api/flickr', {params: options}).toPromise()
      .then(response => response.json())
      .catch(err => FlickrService.handleError(err));
  }
}


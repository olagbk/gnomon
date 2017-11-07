import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class FlickrService {
  private albumsUrl = '/api/albums';
  constructor(private http: Http) { }

  static handleError(error: any): Promise<any> {
    console.log(`Gallery Service error: ${error}`);
    return Promise.reject(error.message || error);
  }
  public getImages(options) {
    if (sessionStorage) {
      const albumID = sessionStorage.getItem(options.album);
      if (albumID) { options.albumID = albumID; }
    }
    return this.http.get(this.albumsUrl, {params: options})
      .toPromise()
      .then(response => response.json())
      .catch(err => FlickrService.handleError(err));
  }
}


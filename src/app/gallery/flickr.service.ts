import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class FlickrService {
  private galleryUrl = '/api/gallery';
  private albumsUrl = '/api/albums';
  constructor(private http: Http) { }

  static handleError(error: any): Promise<any> {
    console.log(`Gallery Service error: ${error}`);
    return Promise.reject(error.message || error);
  }
  public getImages(options) {
    const getAlbumId = new Promise((resolve) => {
      this.http.get(this.albumsUrl)
        .toPromise()
        .then(response => {
          const responseObj = response.json();
          resolve(responseObj[options.album]);
        });
    });
    return getAlbumId.then(id => {
      return this.http.get(this.galleryUrl, {params: {album_id: id, page: options.page, perPage: options.perPage}})
        .toPromise()
        .then(response => response.json())
        .catch(err => FlickrService.handleError(err));
      });
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AlbumsService } from './albums.service';


@Injectable()
export class FlickrService {
  constructor(private http: Http) { }

  handleError(error: any): Promise<any> {
    console.log(`Gallery Service error: ${error}`);
    return Promise.reject(error.message || error);
  }
  getImages(options: any): Promise<any> {
    return this.http.get('/api/flickr', {params: options}).toPromise()
      .then(response => response.json())
      .catch(err => this.handleError(err));
  }
}


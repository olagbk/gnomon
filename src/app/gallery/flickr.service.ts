import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class FlickrService {
  private url = '/api/albums';
  constructor(private http: Http) { }

  static handleError(error: any): Promise<any> {
    console.log(`Gallery Service error: ${error}`);
    return Promise.reject(error.message || error);
  }
  public getImages(options) {
    return this.http.get(this.url, {params: options})
      .toPromise()
      .then(response => response.json())
      .catch(err => FlickrService.handleError(err));
  }
}

import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { GalleryImage } from 'ng-gallery';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class FlickrService {
  private drawingsUrl = '/api/drawings';
  private params = new URLSearchParams;
  constructor(private http: Http) { }

  static handleError(error: any): Promise<any> {
    console.log(`Gallery Service error: ${error}`);
    return Promise.reject(error.message || error);
  }
  public getDrawings(options) {
    this.params.set('page', options.page);
    this.params.set('perPage', options.perPage);
    return this.http.get(this.drawingsUrl, {params: this.params})
      .toPromise()
      .then(response => response.json())
      .catch(err => FlickrService.handleError(err));
  }
}

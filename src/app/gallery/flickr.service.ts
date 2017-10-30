import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GalleryImage } from 'ng-gallery';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class FlickrService {
  private drawingsUrl = '/api/drawings';
  constructor(private http: Http) { }

  static handleError(error: any): Promise<any> {
    console.log(`Gallery Service error: ${error}`);
    return Promise.reject(error.message || error);
  }
  public getDrawings(): Promise<GalleryImage[]> {
    return this.http.get(this.drawingsUrl)
      .toPromise()
      .then(response => response.json()
        .map(img => {
        return {
          src: img.url_o,
          thumbnail: img.url_n,
          text: img.title
        };
      }) as GalleryImage[]
      )
      .catch(err => FlickrService.handleError(err));
  }
}

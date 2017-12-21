import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Params } from '@angular/router';
import { FlickrParams } from '../src/app/gallery/flickr-params';


export class FlickrServiceStub {
  totalItems = 2000;
  error = false;
  getImages(params: FlickrParams): Promise<any> {
    if (this.error) {
      return Promise.reject('');
    }
    const images = [];
    const perPage = params.perPage || 1;
    for (let i = 1; i <= perPage; i++) {
      images.push({src: 'https://some.url', thumbnail: 'thumbnail.url', text: 'Image title'});
    }
    return Promise.resolve({
      images: images,
      count: this.totalItems
    });
  }
}
export class GalleryServiceStub {
  load() {}
}

export class ActivatedRouteStub {

  private subject = new BehaviorSubject(this.testQueryParams);
  queryParams = this.subject.asObservable();

  private _testQueryParams: Params = {};
  get testQueryParams() { return this._testQueryParams; }
  set testQueryParams(params: {}) {
    this._testQueryParams = params;
    this.subject.next(this._testQueryParams);
  }
  get snapshot() {
    return { queryParams: this._testQueryParams };
  }
}

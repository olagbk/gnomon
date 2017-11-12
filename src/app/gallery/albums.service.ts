import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Album } from './album';

@Injectable()
export class AlbumsService {

  private _albumData: any;

  constructor(private http: Http) { }

  loadAll(): Promise<Album[]> {
    return this.http.get('/api/albums')
      .map((res: Response) => res.json())
      .toPromise()
      .then((data: Album[]) => data)
      .catch((err: any) => Promise.reject(err.message || `Failed to fetch albums from the server`));
  }

  getPhotos(): Promise<Album[]> {
    if (this.data) {
      return Promise.resolve(this.data.filter(a => a.type === 'photos'));
    } else {
      return this.http.get('/api/albums/photos').toPromise()
        .then(response => response.json());
    }
  }

  get data(): Album[] {
    try {
      JSON.parse(sessionStorage.getItem('albumData'));
    } catch (e) { return; }
  }
  set data(data) {
    try { sessionStorage.setItem('albumData', JSON.stringify(data));
    } catch (e) { return; }
  }
}

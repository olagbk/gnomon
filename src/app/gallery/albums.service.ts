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
      .then((data: Album[]) => this._albumData = data)
      .catch((err: any) => {
        console.log(`Couldn't prefetch albums from the server.`);
        Promise.resolve();
      });
  }
  getPhotos(): Album[] {
    return this.data.filter(a => a.type === 'photos');
  }
  getAlbumByType(type): Album {
    return this.data.find(album => album.type === type);
  }
  get data(): Album[] {
    return this._albumData;
  }
}

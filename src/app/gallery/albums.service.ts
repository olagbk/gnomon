import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AlbumsService {

  private _albumData: any;

  constructor(private http: Http) { }

  load(): Promise<any> {

    this._albumData = null;

    return this.http
      .get('/api/albums')
      .map((res: Response) => res.json())
      .toPromise()
      .then((data: any) => this._albumData = data)
      .catch((err: any) => Promise.reject(err.message || `Failed to fetch albums from the server`));
  }

  get albumData(): any {
    return this._albumData;
  }
}

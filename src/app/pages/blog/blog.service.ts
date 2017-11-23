import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BlogService {

  constructor(private http: Http) { }

  // Get all blog from the API
  getPosts() {
    return this.http.get('/api/posts')
      .map(res => res.json());
  }
}

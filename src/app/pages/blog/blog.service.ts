import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BlogService {

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get('/api/posts')
      .map(res => res.json());
  }
  getPost(id) {
    return this.http.get(`/api/posts/${id}`).toPromise()
      .then(res => res.json());
  }
}

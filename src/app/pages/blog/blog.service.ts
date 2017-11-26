import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Post } from './post';

@Injectable()
export class BlogService {

  constructor(private http: Http) { }

  getPosts(): Promise<Post[]> {
    return this.http.get('/api/posts').toPromise()
      .then((res: Response) => res.json());
  }
  getPost(id): Promise<Post> {
    return this.http.get(`/api/posts/${id}`).toPromise()
      .then((res: Response) => res.json());
  }
}

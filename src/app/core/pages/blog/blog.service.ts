import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Post, Tag } from './post';

@Injectable()
export class BlogService {

  constructor(private http: Http) { }

  getTags(): Promise<Tag[]> {
    return this.http.get('/api/tags').toPromise()
      .then((res: Response) => res.json());
  }
  getPosts(params = {}): Promise<Post[]> {
    const options = new RequestOptions({params: params});

    return this.http.get('/api/posts', options).toPromise()
      .then((res: Response) => res.json());
  }
  getPost(id: string): Promise<Post> {
    return this.http.get(`/api/posts/${id}`).toPromise()
      .then((res: Response) => res.json());
  }
  editPost(post: Post, tags: string[]): Promise<{post: Post, tags: Tag[]}> {
    const options = new RequestOptions({params: {token: localStorage.getItem('token')}});
    const body = { post: post, tags: tags };

    return this.http.put(`api/posts/${post.id}`, body, options).toPromise()
      .then((res: Response) => res.json());
  }
  createPost(post: Post, tags: string[]): Promise<{post: Post, tags: Tag[]}> {
    const options = new RequestOptions({params: {token: localStorage.getItem('token')}});
    const body = { post: post, tags: tags };

    return this.http.post('api/posts', body, options).toPromise()
      .then((res: Response) => res.json());
  }
  deletePost(id: string): Promise<any> {
    const options = new RequestOptions({params: {token: localStorage.getItem('token')}});

    return this.http.delete(`/api/posts/${id}`, options).toPromise()
      .then((res: Response) => res.json());
  }
}

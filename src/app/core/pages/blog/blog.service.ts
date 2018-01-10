import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
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
    return this.http.get('/api/posts', params).toPromise()
      .then((res: Response) => res.json());
  }
  getPost(id: string): Promise<Post> {
    return this.http.get(`/api/posts/${id}`).toPromise()
      .then((res: Response) => res.json());
  }
  editPost(post: Post, tags: string[]): Promise<{post: Post, tags: Tag[]}> {
    return this.http.put(`api/posts/${post.id}`, {post: post, tags: tags}).toPromise()
      .then((res: Response) => res.json());
  }
  createPost(post: Post, tags: string[]): Promise<{post: Post, tags: Tag[]}> {
    return this.http.post('api/posts', {post: post, tags: tags}).toPromise()
      .then((res: Response) => res.json());
  }
  deletePost(id: string): Promise<any> {
    return this.http.delete(`/api/posts/${id}`).toPromise()
      .then((res: Response) => res.json())
      .catch((err: Response) => err.json());
  }
}
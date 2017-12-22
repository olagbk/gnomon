import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Params } from '@angular/router';
import { FlickrParams } from '../src/app/gallery/flickr-params';
import { Post, Tag } from '../src/app/pages/blog/post';

export class BlogServiceStub {
  posts: Post[] = [{
    id: '1',
    title: 'Post title',
    body: 'Post body',
    createdAt: '2017-11-25T20:45:11.140Z',
    updatedAt: '2017-11-25T20:45:11.140Z',
    tags: [{name: 'tag1', count: 2}]
  }, {
    id: '2',
    title: 'Post title',
    body: 'Post body',
    createdAt: '2017-11-25T20:45:11.140Z',
    updatedAt: '2017-11-25T20:45:11.140Z',
    tags: [{name: 'tag2', count: 2}]
  }, {
    id: '3',
    title: 'Post title',
    body: 'Post body',
    createdAt: '2017-11-25T20:45:11.140Z',
    updatedAt: '2017-11-25T20:45:11.140Z',
    tags: [{name: 'tag1', count: 2}, {name: 'tag2', count: 2}]
  }, {
    id: '4',
    title: 'Post title',
    body: 'Post body',
    createdAt: '2017-11-25T20:45:11.140Z',
    updatedAt: '2017-11-25T20:45:11.140Z',
    tags: [{name: 'tag3', count: 1}]
  }];
  tags: Tag[] = [
    {name: 'tag1', count: 2},
    {name: 'tag2', count: 2},
    {name: 'tag3', count: 1}
  ]
  getPosts(): Promise<Post[]> {
    return Promise.resolve(this.posts);
  }
  getTags(): Promise<Tag[]> {
    return Promise.resolve(this.tags);
  }
}

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
  set() {}
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
export class RouterStub {
  navigateByUrl(url: string) { return url; }
}

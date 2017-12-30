/* tslint:disable:component-selector*/
/* tslint:disable:directive-selector*/
/* tslint:disable:use-host-property-decorator*/
/* tslint:disable:no-input-rename*/

import { Directive, Input, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Params } from '@angular/router';
import { FlickrParams } from '../src/app/gallery/flickr-params';
import { Post, Tag } from '../src/app/pages/blog/post';
import { Album } from '../src/app/gallery/album';

export class AlbumsServiceStub {
  getAlbumByType(album: string): Album {return {album_id: album, type: album}; }
  getPhotos(): Album[] { return [{
    type: 'photos',
    name: 'mammalia',
    album_id: '72157644448784543',
    filename: 'mammalia.jpg'
  },
    {
      type: 'photos',
      name: 'insecta et invertebrata',
      album_id: '72157636520804406',
      filename: 'insecta.jpg'
    },
    {
      type: 'photos',
      name: 'weird / creepy / dead',
      album_id: '72157642924012913',
      filename: 'weird.jpg'
    },
    {
      type: 'photos',
      name: 'aves',
      album_id: '72157636520438644',
      filename: 'aves.jpg'
    }];
  }
}
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
    updatedAt: '2017-11-26T20:45:11.140Z',
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
  ];
  getPost(id: string): Promise<Post> {
    return Promise.resolve(this.posts.find(p => p.id === id));
  };
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
@Component({
  selector: 'app-gallery',
  template: `<span></span>`
})
export class GalleryStubComponent {
  @Input() album: string;
}
@Component({
  selector: 'app-tags-host',
  template: `<app-tags [tags]="tags" [count]="count" [abbr]="abbr" [selected]="selected" (tagSelected)="selectTag($event)"></app-tags>`
})
export class TagsHostStubComponent {
  tags: Tag[];
  count: boolean;
  abbr: boolean;
  selected: boolean;
  selectTag($event) {}
}
@Component({
  selector: 'app-pagination-host',
  template: `
    <app-pagination [items]="items" [perPage]="perPage" [perPageOpts]="perPageOpts" (perPageChanged)="onSelect($event)"></app-pagination>
  `
})
export class PaginationHostStubComponent {
  items: number;
  perPage: number;
  perPageOpts: number[];
  currentPage:  number;
  onSelect($event) {
    this.perPage = $event.perPage;
    this.currentPage = $event.currentPage;
  }
}
@Component({
  selector: 'pagination',
  template: `
    <span></span>
  `
})
export class BootstrapPaginationStubComponent {
  @Input() totalItems: number;
  @Input() maxSize: number;
  @Input() itemsPerPage: number;
}
export class ActivatedRouteStub {

  private psubject = new BehaviorSubject(this.testParams);
  private qpsubject = new BehaviorSubject(this.testQueryParams);
  params = this.psubject.asObservable();
  queryParams = this.qpsubject.asObservable();

  private _testParams: Params = {};
  private _testQueryParams: Params = {};
  get testParams() { return this._testParams; }
  get testQueryParams() { return this._testQueryParams; }
  set testQueryParams(params: {}) {
    this._testQueryParams = params;
    this.qpsubject.next(this._testQueryParams);
  }
  set testParams(params: {}) {
    this._testParams = params;
    this.psubject.next(this._testParams);
  }
  get snapshot() {
    return {
      params: this._testParams,
      queryParams: this._testQueryParams,
      url: [{path: 'path'}]
    };
  }
}
export class RouterStub {
  navigate(commands: string[], extras: any) { return Promise.resolve(true); }
  navigateByUrl(url: string) { return Promise.resolve(true); }
}
@Directive({
  selector: '[routerLink]',
  host: {
    '(click)': 'onClick()'
  }
})
export class RouterLinkStubDirective {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  onClick() {
    this.navigatedTo = this.linkParams;
  }
}

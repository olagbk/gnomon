import { EventEmitter, Output } from '@angular/core';
import { Album } from '../app/core/gallery/album';
import { Email } from '../app/core/widgets/contact-form/email';
import { FlickrParams } from '../app/core/gallery/flickr-params';
import { Post, Tag } from '../app/core/pages/blog/post';

export class AuthServiceStub {
  valid = true;
  admin = false;
  @Output() loggedIn: EventEmitter<boolean> = new EventEmitter(this.admin);

  login(password: string): Promise<boolean> {
    return Promise.resolve(this.valid);
  }
  logout() {}

}
export class MailerServiceStub {
  error = false;

  send(email: Email): Promise<any> {
    if (this.error) {
      return Promise.reject(null);
    }
    return Promise.resolve();
  }
}

export class AlbumsServiceStub {
  photos: Album[] = [{
    type: 'photos',
    name: 'mammalia',
    albumId: '72157644448784543',
    filename: 'mammalia.jpg'
  },
    {
      type: 'photos',
      name: 'insecta et invertebrata',
      albumId: '72157636520804406',
      filename: 'insecta.jpg'
    },
    {
      type: 'photos',
      name: 'weird / creepy / dead',
      albumId: '72157642924012913',
      filename: 'weird.jpg'
    },
    {
      type: 'photos',
      name: 'aves',
      albumId: '72157636520438644',
      filename: 'aves.jpg'
    }];

  getAlbumByType(album: string): Album {return {albumId: album, type: album}; }

  getPhotos(): Album[] { return this.photos; }

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
  editPost(post: Post): Promise<any> {
    return Promise.resolve();
  }
  createPost(post: Post): Promise<any> {
    return Promise.resolve();
  }
  deletePost(id: string): Promise<any> {
    return Promise.resolve();
  }
}

export class FlickrServiceStub {
  totalItems = 2000;
  error: number;

  getImages(params: FlickrParams): Promise<any> {
    if (this.error && params.page != 1) {
      return Promise.reject({
        status: this.error
      });
    }
    const images = [];
    const perPage = params.perPage || 1;
    for (let i = 1; i <= perPage; i++) {
      images.push({
        src: 'https://some.url',
        thumbnail: 'thumbnail.url',
        text: 'Image title'
      });
    }
    return Promise.resolve({
      images: images,
      count: this.totalItems
    });
  }
}

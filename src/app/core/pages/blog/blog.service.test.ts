// testing tools
import { should } from 'chai';

// angular imports
import { HttpModule, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { TestBed, async } from '@angular/core/testing';
import 'rxjs/add/operator/toPromise';

// dependencies
import { BlogService } from './blog.service';

// models
import { Post, Tag } from './post';

describe('BlogService', () => {
  let service: BlogService;
  let mockBackend: MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [ BlogService, { provide: XHRBackend, useClass: MockBackend }]
    });
    service = TestBed.get(BlogService);
    mockBackend = TestBed.get(XHRBackend);
  });

  it('should be created', () => {
    should().exist(service);
  });

  describe('Get all posts', () => {
    let mockResponse: Post[];

    beforeEach(() => {
      mockResponse = [
        { id: '1', title: 'Post title', body: 'Post body', tags: [] },
        { id: '2', title: 'Post title', body: 'Post body', tags: [] }
      ];

      const options = new ResponseOptions({
        body: mockResponse
      });
      const response = new Response(options);

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(response);
      });
    });

    it('should return all posts a promise of an array', async(() => {
      service.getPosts().then(posts => {
        posts.should.equal(mockResponse);
      });
    }));
  });

  describe('Get single post', () => {
    let mockResponse: Post;

    beforeEach(() => {
      mockResponse = { id: '1', title: 'Post title', body: 'Post body', tags: [] };

      const options = new ResponseOptions({
        body: mockResponse
      });
      const response = new Response(options);

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(response);
      });
    });

    it('should pass id in request url', async(() => {
      service.getPost('1').then(() => {
        const url = mockBackend.connectionsArray[0].request.url;
        const id = url[url.length - 1];
        id.should.equal('1');
      });
    }));
    it('should return a single post as a promise', async(() => {
      service.getPost('1').then(post => {
        post.should.equal(mockResponse);
      });
    }));
  });

  describe('Get tags', () => {
    let mockResponse: Tag[];

    beforeEach(() => {
      mockResponse = [
        { name: 'tag1', count: 2 },
        { name: 'tag2', count: 1 }
      ];
      const options = new ResponseOptions({
        body: mockResponse
      });
      const response = new Response(options);

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(response);
      });
    });

    it('should return all tags a promise of an array', async(() => {
        service.getTags().then(tags => {
          tags.should.equal(mockResponse);
        });
      }));
  });

  describe('Edit post', () => {
    let mockResponse: {post: Post, tags: Tag[]};

    beforeEach(() => {
      const post = { id: '1', title: 'title', body: 'body', tags: [] };
      const tags = [ {name: 'post', count: 1} ];
      mockResponse = { post, tags };
      const options = new ResponseOptions({
        body: mockResponse
      });
      const response = new Response(options);

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(response);
      });
    });

    it('should pass post id in params', async(() => {
      service.editPost(mockResponse.post, ['post']).then(() => {
        const url = mockBackend.connectionsArray[0].request.url.split('?')[0];
        const id = url[url.length - 1];
        id.should.equal('1');
      });
    }));
    it('should pass post object and tag strings in request body', async(() => {
      service.editPost(mockResponse.post, ['post']).then(res => {
        const body = JSON.parse(mockBackend.connectionsArray[0].request.getBody());
        body.post.should.deep.equal(mockResponse.post);
        body.tags.should.deep.equal(['post']);
      });
    }));
    it('should return a promise of post & tags', async(() => {
      service.editPost(mockResponse.post, ['post']).then(res => {
        res.post.should.equal(mockResponse.post);
        res.tags.should.equal(mockResponse.tags);
      });
    }));
  });
  describe('Create post', () => {
    let mockResponse: {post: Post, tags: Tag[]};

    beforeEach(() => {
      const post = { id: '1', title: 'title', body: 'body', tags: [] };
      const tags = [ {name: 'post', count: 1} ];
      mockResponse = { post, tags };
      const options = new ResponseOptions({
        body: mockResponse
      });
      const response = new Response(options);

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(response);
      });
    });
    it('should pass post object and tag strings in request body', async(() => {
      service.createPost(mockResponse.post, ['post']).then(res => {
        const body = JSON.parse(mockBackend.connectionsArray[0].request.getBody());
        body.post.should.deep.equal(mockResponse.post);
        body.tags.should.deep.equal(['post']);
      });
    }));
    it('should return a promise of post & tags', async(() => {
      service.createPost(mockResponse.post, ['post']).then(res => {
        res.post.should.equal(mockResponse.post);
        res.tags.should.equal(mockResponse.tags);
      });
    }));
  });

  describe('Delete post', () => {

    it('should pass post id in params', async(() => {
      const mockResponse = {};
      const options = new ResponseOptions({
        body: mockResponse
      });
      const response = new Response(options);

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(response);
      });

      service.deletePost('1').then(() => {
        const url = mockBackend.connectionsArray[0].request.url.split('?')[0];
        const id = url[url.length - 1];
        id.should.equal('1');
      });
    }));
    it('should return json', async(() => {
      const mockResponse = {};
      const options = new ResponseOptions({
        body: mockResponse
      });
      const response = new Response(options);

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(response);
      });

      service.deletePost('1').then(res => {
        res.should.deep.equal({});
      });
    }));
  });
});

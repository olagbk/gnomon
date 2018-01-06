import { should } from 'chai';
import { HttpModule, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';


import { BlogService } from './blog.service';

describe('PostsService', () => {


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [
        BlogService,
        { provide: XHRBackend, useClass: MockBackend }
        ]
    });
  });

  it('should be created', inject([BlogService], (service: BlogService) => {
    should().exist(service);
  }));
  it('should return all tags a promise of an array',
    inject([BlogService, XHRBackend], (service: BlogService, mockBackend: MockBackend) => {
      const mockResponse = [
        { id: 1, name: 'tag1', count: 2 },
        { id: 2, name: 'tag2', count: 1 }
      ];
      const options = new ResponseOptions({
        body: mockResponse
      });
      const response = new Response(options);

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(response);
      });
      service.getTags().then(tags => {
        tags.should.equal(mockResponse);
      });
    }));
  it('should return all posts a promise of an array',
    inject([BlogService, XHRBackend], (service: BlogService, mockBackend: MockBackend) => {
      const mockResponse = [
        { id: 1, title: 'Post title', body: 'Post body' },
        { id: 2, title: 'Post title', body: 'Post body' }
      ];
      const options = new ResponseOptions({
        body: mockResponse
      });
      const response = new Response(options);

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(response);
      });
      service.getPosts().then(posts => {
        posts.should.equal(mockResponse);
     });
  }));
  it('should return a single post as a promise',
    inject([BlogService, XHRBackend], (service: BlogService, mockBackend: MockBackend) => {
      const mockResponse = { id: 1, title: 'Post title', body: 'Post body' };
      const options = new ResponseOptions({
        body: mockResponse
      });
      const response = new Response(options);

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(response);
      });
      service.getPost('1').then(post => {
        post.should.equal(mockResponse);
      });
    }));
});

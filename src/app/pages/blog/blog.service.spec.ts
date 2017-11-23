import { should } from 'chai';
import { HttpModule, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';


import { PostsService } from './blog.service';

describe('PostsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        PostsService,
        { provide: XHRBackend, useClass: MockBackend }
        ]
    });
  });

  it('should be created', inject([PostsService], (service: PostsService) => {
    should().exist(service);
  }));
  it('should return an Observable of blog',
    inject([PostsService, XHRBackend], (service: PostsService, mockBackend: MockBackend) => {
      const mockResponse = [
        { id: 1, title: 'Post title', body: 'Post body' }
      ];
      const options = new ResponseOptions({
        body: mockResponse
      });
      const response = new Response(options);

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(response);
      });
      service.getAllPosts().subscribe(posts => {
        posts.length.should.equal(1);
     });
  }));
});

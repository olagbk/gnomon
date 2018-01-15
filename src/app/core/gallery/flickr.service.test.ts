/* tslint:disable:no-unused-expression */

// testing tools
import { should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import * as sinon from 'sinon';

// angular imports
import { TestBed, async } from '@angular/core/testing';
import { HttpModule, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

// dependencies
import { FlickrService } from './flickr.service';

// models
import { FlickrParams } from './flickr-params';

use(chaiAsPromised);

describe('GalleryService', () => {
  let response: Response;
  let mockData: any;
  let mockBackend: MockBackend;
  let service: FlickrService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        FlickrService,
        {provide: XHRBackend, useClass: MockBackend}
      ]
    });
    mockData = {
      images: [
      {src: 'https://some.url', thumbnail: 'thumbnail.url', text: 'Image title'},
      {src: 'https://some.other.url', thumbnail: 'other.thumbnail.url', text: 'Another title'}
      ],
      count: 2
    };
    service = TestBed.get(FlickrService);
    mockBackend = TestBed.get(XHRBackend);

    const options = new ResponseOptions({
      body: mockData
    });
    response = new Response(options);
  });

  it('should be created', () => {
    should().exist(service);
  });
  it('should send params in request body', async(() => {
    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(response);
    });
    const params: FlickrParams = { page: 1, perPage: 10, album: 'albumID' };
    const query = [];
    for (const key in params) {
      if (params.hasOwnProperty(key)) { query.push(key + '=' + params[key]); }
    }
    const queryStr = query.join('&');

    service.getImages(params).then(() => {
      const reqQuery = mockBackend.connectionsArray[0].request.url.split('?')[1];
      reqQuery.should.equal(queryStr);
    });
  }));
  it('should fetch requested albums', async(() => {
    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(response);
    });
    service.getImages(<FlickrParams>{}).then(albums => {
      albums.should.equal(mockData);
    });
  }));
  it('error handler should be called and return a rejected promise', async(() => {
    mockBackend.connections.subscribe((connection) => {
      connection.mockError(new Error);
    });
    const spy = sinon.spy(service, 'handleError');

    service.getImages(<FlickrParams>{})
      .catch(err => {
        spy.called.should.be.true;
        spy.returnValues[0].should.be.rejected;
    });
  }));
});

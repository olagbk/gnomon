// testing tools
import { should } from 'chai';

// angular imports
import { TestBed, async } from '@angular/core/testing';
import { HttpModule, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

// dependencies
import { AlbumsService } from './albums.service';

// models
import { Album } from './album';

describe('AlbumsService', () => {
  let mockResponse: Album[];
  let mockBackend: MockBackend;
  let service: AlbumsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        AlbumsService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });
    mockResponse = [
      {type: 'photos', albumId: '52222', name: 'things', filename: 'things.png'},
      {type: 'photos', albumId: '38755', name: 'people', filename: 'people.png'},
      {type: 'drawings', albumId: '28888'},
      {type: 'sketches', albumId: '56432'}
    ];
    service = TestBed.get(AlbumsService);
    mockBackend = TestBed.get(XHRBackend);
  });

  it('should be created', () => {
    should().exist(service);
  });

  it('should return an empty promise if server error received', async(() => {
    mockBackend.connections.subscribe((connection) => {
      connection.mockError(new Error());
    });
    service.loadAll().then(res => {
      should().not.exist(res);
    });
  }));

  it('should load and store a list of all albums', async(() => {
    const options = new ResponseOptions({
      body: mockResponse
    });
    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(options));
    });

    should().not.exist(service.data);

    service.loadAll().then(albums => {
      albums.should.be.an('array');
      albums.length.should.equal(4);
      service.data.should.equal(mockResponse);
    });
  }));
  it('should filter out photographs', async(() => {
    const options = new ResponseOptions({
      body: mockResponse
    });
    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(options));
    });

    service.loadAll().then(albums => {
      const photos = service.getPhotos();
      photos.length.should.equal(2);
      photos[0].type.should.equal('photos');
      photos[1].type.should.equal('photos');
    });
  }));
  it('should get an album by content type', async(() => {
    const options = new ResponseOptions({
      body: mockResponse
    });
    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(options));
    });

    service.loadAll().then(albums => {
      const drawings = service.getAlbumByType('drawings');
      const sketches = service.getAlbumByType('sketches');
      drawings.type.should.equal('drawings');
      sketches.type.should.equal('sketches');
    });
  }));
});

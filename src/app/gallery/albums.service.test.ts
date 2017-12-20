import { should } from 'chai';
import { TestBed, async } from '@angular/core/testing';
import { HttpModule, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { AlbumsService } from './albums.service';
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
      {type: 'photos', album_id: '52222', name: 'things', filename: 'things.png'},
      {type: 'photos', album_id: '38755', name: 'people', filename: 'people.png'},
      {type: 'drawings', album_id: '28888'},
      {type: 'sketches', album_id: '56432'}
    ];
    service = TestBed.get(AlbumsService);
    mockBackend = TestBed.get(XHRBackend);

    const options = new ResponseOptions({
      body: mockResponse
    });
    const response = new Response(options);

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(response);
    });
  });

  it('should be created', () => {
    should().exist(service);
  });

  it('should load and store a list of all albums', async(() => {
    should().not.exist(service.data);

    service.loadAll().then(albums => {
      albums.should.be.an('array');
      albums.length.should.equal(4);
      service.data.should.equal(mockResponse);
    });
  }));
  it('should filter out photographs', async(() => {
    service.loadAll().then(albums => {
      const photos = service.getPhotos();
      photos.length.should.equal(2);
      photos[0].type.should.equal('photos');
      photos[1].type.should.equal('photos');
    });
  }));
  it('should get an album by content type', async(() => {
    service.loadAll().then(albums => {
      const drawings = service.getAlbumByType('drawings');
      const sketches = service.getAlbumByType('sketches');
      drawings.type.should.equal('drawings');
      sketches.type.should.equal('sketches');
    });
  }));
});

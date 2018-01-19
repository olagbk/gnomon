'use strict';

import chaiHttp from 'chai-http';
import sinon from 'sinon';

import server from '~/dist/index';
import flickrService from '~/dist/services/flickr';

import MockFlickr from '../stubs/flickr';
import mockConfig from '../stubs/config';

import '../migrations.js';

const chai = require('chai').use(chaiHttp);

describe('/Flickr test', () => {
  let mockFlickr, testQuery;

  beforeEach(done => {
    mockFlickr = new MockFlickr();

    flickrService.useAPI(mockFlickr);
    flickrService.useConfig(mockConfig);

    testQuery = {
        album: 'yo mama',
        page: '1',
        perPage: '20'
      };
    done();
  });

  it('should handle authorization errors', done => {
    const stub = sinon.stub(flickrService, 'authenticate').rejects(new Error());

    chai.request(server)
      .get('/api/flickr')
      .query(testQuery)
      .end((err, res) => {

        should.exist(err);
        err.status.should.equal(500);
        stub.restore();
        done();
      });
  });

  it('should handle photoset errors', done => {
    mockFlickr.albumError = new Error();

    chai.request(server)
      .get('/api/flickr')
      .query(testQuery)
      .end((err, res) => {

        should.exist(err);
        err.status.should.equal(404);
        done();
      });
  });

  it('should call flickr API with required options', done => {
    const spy = sinon.spy(mockFlickr.photosets, 'getPhotos');

    chai.request(server)
      .get('/api/flickr')
      .query(testQuery)
      .end((err, res) => {

        spy.calledOnce.should.be.true;

        const options = spy.firstCall.args[0];
        options.should.have.keys('user_id', 'photoset_id', 'page', 'per_page', 'extras');
        options.user_id.should.equal('userId');
        options.photoset_id.should.equal('yo mama');
        options.page.should.equal('1');
        options.per_page.should.equal('20');
        options.extras.should.be.an('array').that.includes('url_n');

        done();
      });
  });

  it('should send formatted json response', done => {
    chai.request(server)
      .get('/api/flickr')
      .query(testQuery)
      .end((err, res) => {

        res.body.should.have.keys('images', 'count');
        res.body.count.should.equal(15);
        res.body.images.length.should.equal(2);

        res.body.images[0].should.have.keys('src', 'thumbnail', 'text');
        res.body.images[0].src.should.equal('https://farm1.staticflickr.com/server/id_secret_b.jpg');
        res.body.images[0].thumbnail.should.equal('url_n');
        res.body.images[0].text.should.equal('title');

        done();
      });
  });
});

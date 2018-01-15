'use strict';

import sinon from 'sinon';
import { getAlbum } from '~/dist/routes/flickr_controller';
import { MockFlickr } from './stubs/flickr';
import { mockConfig } from './stubs/config';
import { Res } from './stubs/res';
import './migrations.js';

describe('/Flickr test', () => {
  let req, res, mockFlickr;

  beforeEach(done => {
    mockFlickr = new MockFlickr();
    res = new Res();
    req = {
      query: {
        album: 'yo mama',
        page: '1',
        perPage: '20'
      }
    };
    done();
  });

  it('should handle authorization errors', done => {
    const sendSpy = sinon.spy(res, 'send');
    const statusSpy = sinon.spy(res,'status');
    const jsonSpy = sinon.spy(res, 'json');
    const flickr = mockFlickr.response({authError: true});

    getAlbum(flickr, req, res, mockConfig).then(() => {
      jsonSpy.called.should.be.false;
      sendSpy.calledOnce.should.be.true;
      sendSpy.firstCall.args[0].should.be.an.instanceOf(Error);
      statusSpy.calledWith(500).should.be.true;
      done();
    });
  });

  it('should handle photoset errors', done => {
    const sendSpy = sinon.spy(res, 'send');
    const statusSpy = sinon.spy(res,'status');
    const jsonSpy = sinon.spy(res, 'json');
    const flickr = mockFlickr.response({albumError: true});

    getAlbum(flickr, req, res, mockConfig).then(() => {
      jsonSpy.called.should.be.false;
      sendSpy.calledOnce.should.be.true;
      sendSpy.firstCall.args[0].should.be.an.instanceOf(Error);
      statusSpy.calledWith(404).should.be.true;
      done();
    });
  });

  it('should call flickr API with required options', done => {
    const spy = sinon.spy(mockFlickr, 'getPhotos');

    getAlbum(mockFlickr.response(), req, res, mockConfig).then(() => {
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
    const jsonSpy = sinon.spy(res, 'json');
    const flickr = mockFlickr.response();

    getAlbum(flickr, req, res, mockConfig)
      .then(() => {
        jsonSpy.calledOnce.should.be.true;

        const args = jsonSpy.firstCall.args[0];
        args.should.have.keys('images', 'count');
        args.count.should.equal(15);
        args.images.length.should.equal(2);

        args.images[0].should.have.keys('src', 'thumbnail', 'text');
        args.images[0].src.should.equal('https://farm1.staticflickr.com/server/id_secret_b.jpg');
        args.images[0].thumbnail.should.equal('url_n');
        args.images[0].text.should.equal('title');
        done();
    });
  });
});

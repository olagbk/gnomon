'use strict';

import sinon from 'sinon';
import { mockFlickr } from '~/test/stubs/server';
import { fetchAlbum } from '~/dist/routes/flickr_controller';
import '../migrations.js';

describe('/Flickr test', () => {
  let req, res;

  beforeEach(done => {
    req = {
      query: {
        album: 'yo mama',
        page: '1',
        perPage: '20'
      }
    };
    res = {
      status: function() { return this },
      send: function() { return this },
      json: function(data) { return data }
    };
    done();
  });

  it('should send json response', done => {
    const jsonSpy = sinon.spy(res, 'json');

    fetchAlbum(mockFlickr, req, res).then(() => {
      jsonSpy.calledOnce.should.equal(true);
      done();
    });
  });
});

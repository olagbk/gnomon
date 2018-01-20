'use strict';

import chaiHttp from 'chai-http';

import server from '~/dist/index';
import sequelize from '~/dist/database/sequelize';

import '../migrations.js';

const chai = require('chai').use(chaiHttp);

describe('Albums route', () => {

  let response;

  beforeEach(done => {
    response = null;

    sequelize.models.albums.destroy({where: {}})
      .then(() => {

      sequelize.models.albums.bulkCreate([{
        type: 'drawings',
        albumId: '72157634825451545'
      }, {
        type: 'sketches',
        albumId: '72157658877200994'
      }, {
        type: 'photos',
        name: 'insecta et invertebrata',
        albumId: '72157636520804406',
        filename: 'insecta.jpg'
      }, {
        type: 'photos',
        name: 'mammalia',
        albumId: '72157644448784543',
        filename: 'mammalia.jpg'
      }])
    }).then(() => done());
  });

  describe('/GET all', () => {

    beforeEach(done => {
      chai.request(server)
        .get('/api/albums')
        .end((err, res) => {
          response = {err, res};
          done();
        });
    });

    it('should return correctly formatted data', done => {
      should.not.exist(response.err);
      response.res.should.have.status(200);
      response.res.type.should.equal('application/json');
      response.res.body.should.be.an('array');
      response.res.body.length.should.be.equal(4);
      done();
    });
  });

  describe('/GET by type', () => {

    describe('GET drawings', () => {

      beforeEach(done => {

        chai.request(server)
          .get('/api/albums/drawings')
          .end((err, res) => {
            response = {err, res};
            done();
          });
      });

      it('should return correctly formatted data', done => {
        should.not.exist(response.err);
        response.res.should.have.status(200);
        response.res.type.should.equal('application/json');
        response.res.body.should.be.an('object');
        done();
      });
      it('should have the expected properties', () => {
        response.res.body.type.should.equal('drawings');
        response.res.body.id.should.be.a('number');
        response.res.body.albumId.should.be.a('string');
        should.not.exist(response.res.body.name);
        should.not.exist(response.res.body.filename);
      })
    });

    describe('GET sketches', () => {

      beforeEach(done => {

        chai.request(server)
          .get('/api/albums/sketches')
          .end((err, res) => {
            response = {err, res};
            done();
          });
      });

      it('should return correctly formatted data', () => {
        should.not.exist(response.err);
        response.res.should.have.status(200);
        response.res.type.should.equal('application/json');
        response.res.body.should.be.an('object');
      });
      it('should have the expected properties', () => {
        response.res.body.type.should.equal('sketches');
        response.res.body.id.should.be.a('number');
        response.res.body.albumId.should.be.a('string');
        should.not.exist(response.res.body.name);
        should.not.exist(response.res.body.filename);
      })
    });

    describe('GET photos', () => {

      beforeEach(done => {

        chai.request(server)
          .get('/api/albums/photos')
          .end((err, res) => {
            response = {err, res};
            done();
          });
      });

      it('should return correctly formatted data', done => {
        should.not.exist(response.err);
        response.res.should.have.status(200);
        response.res.type.should.equal('application/json');
        response.res.body.should.be.an('array').of.length(2);
        done();
      });
      it('should have the expected properties', () => {
        for (let album of response.res.body) {
          album.type.should.equal('photos');
          album.id.should.be.a('number');
          album.albumId.should.be.a('string');
          album.name.should.be.a('string');
          album.filename.should.be.a('string');
        }
      })
    });
    describe('GET non-existing type', () => {

      beforeEach(done => {

        chai.request(server)
          .get('/api/albums/paintings')
          .end((err, res) => {
            response = {err, res};
            done();
          });
      });

      it('should send 404 status', () => {
        should.exist(response.err);
        response.err.status.should.equal(404);
        response.res.body.should.be.empty;
      });
    })
  });
});



'use strict';

import chaiHttp from 'chai-http';

import server from '~/dist/index';
import sequelize from '~/dist/database/sequelize';
import JWTService from '~/dist/services/jwt';

import JWT from '../../stubs/jwt';
import mockConfig from '../../stubs/config';

import '../../migrations.js';

const chai = require('chai').use(chaiHttp);

describe('Posts DELETE route', () => {

  let response, postID;

  beforeEach(done => {

    response = null;
    JWTService.useAPI(new JWT());
    JWTService.useConfig(mockConfig);

    sequelize.models.posts.create({
      title: "Proper title",
      body: "Much body",
      tags: []
    }).then(instance => {
      postID = instance.id;
      done();
    });
  });
  describe('when authorized', () => {
    beforeEach(done => {

      chai.request(server)
        .delete(`/api/posts/${postID}`)
        .query({token: 'token'})
        .end((err, res) => {
          response = { err, res };
          done();
        })
    });

    it('should return correctly formatted data', () => {
      should.not.exist(response.err);
      response.res.should.have.status(204);
      response.res.body.should.be.empty;
    });
    it('should have been deleted from the database', done => {

      chai.request(server)
        .get(`/api/posts/${postID}`)
        .end((err, res) => {
          should.not.exist(res.body);
          done();
        })
    });
    it('should have deleted associations', done => {
      sequelize.models.post_tags.findAll({
        where: {
          postId: postID
        }
      }).then(ptags => {
        ptags.should.be.an('array').and.be.empty;
        done();
      })
    })
  });
  describe('when unauthorized', () => {

    it('should return 401 and set headers if no token is provided', done => {

      chai.request(server)
        .delete(`/api/posts/${postID}`)
        .end((err, res) => {
          err.status.should.equal(401);
          res.headers['www-authenticate'].should.equal('Bearer token_type="JWT"');
          done();
        })
    });
    it('should return 401 and set headers if token is incorrect', done => {

      chai.request(server)
        .delete(`/api/posts/${postID}`)
        .query({token: 'invalidToken'})
        .end((err, res) => {
          err.status.should.equal(401);
          res.headers['www-authenticate'].should.equal('Bearer token_type="JWT"');
          done();
        })
    })
  });
});



'use strict';

import chaiHttp from 'chai-http';

import server from '~/dist/index';
import sequelize from '~/dist/database/sequelize';
import JWTService from '~/dist/services/jwt';

import MockJWT from '../../stubs/jwt';
import mockConfig from '../../stubs/config';

import '../../migrations.js';

const chai = require('chai').use(chaiHttp);

describe('Posts PUT request', () => {

  let response, fieldsToUpdate, initialPost, updatedPost;

  beforeEach(done => {
    response = null;
    JWTService.useAPI(new MockJWT());
    JWTService.useConfig(mockConfig);

    sequelize.models.posts.destroy({where: {}})
      .then(() => sequelize.models.tags.destroy({where: {}}))
      .then(() => sequelize.models.posts.create({
        title: "Proper title",
        body: "Much body",
        tags: [{
          name: 'sampleTag'
        }, {
          name: 'anotherSampleTag'
        }]
      }, {
        include: sequelize.models.tags
      }))
      .then(post => {
        initialPost = post;
        fieldsToUpdate = Object.assign({}, initialPost.dataValues, {title: 'New title'});
        done();
      })
  });

  describe('preserve tags', () => {

    beforeEach(done => {

      chai.request(server)
        .put(`/api/posts/${initialPost.id}`)
        .send({post: fieldsToUpdate, tags: initialPost.tags.map(t => t.name)})
        .query({token: 'token'})
        .end((err, res) => {
          response = { err, res };

          sequelize.models.posts.findById(initialPost.id, {
            include: {
              model: sequelize.models.tags
            }}).then(post => {
              updatedPost = post;
              done();
            })
        });
    });

    it('should return correctly formatted data', () => {
      should.not.exist(response.err);
      response.res.should.have.status(200);
    });
    it('should have been correctly updated', () => {
      updatedPost.should.be.an('object');
      updatedPost.should.have.property('title').equal('New title');
    });
    it('should have kept the associations', () => {
      updatedPost.tags.length.should.equal(2);
      updatedPost.tags[0].name.should.equal('sampleTag');
      updatedPost.tags[1].name.should.equal('anotherSampleTag');
    })
  });

  describe('update tags', () => {

    beforeEach(done => {
      chai.request(server)
        .put(`/api/posts/${initialPost.id}`)
        .send({post: fieldsToUpdate, tags: ['sampleTag', 'newTag', 'anotherNewTag']})
        .query({token: 'token'})
        .end((err, res) => {
          response = { err, res };

          sequelize.models.posts.findById(initialPost.id, {
            include: {
              model: sequelize.models.tags
            }}).then(post => {
            updatedPost = post;
            done();
          })
        });
    });

    it('should have been correctly updated', () => {
      should.not.exist(response.err);
      updatedPost.should.be.an('object');
      updatedPost.should.have.property('title').equal('New title');
    });
    it('should have added and deleted associations', () => {
      updatedPost.tags.length.should.equal(3);
      updatedPost.tags[0].name.should.equal('sampleTag');
      updatedPost.tags[1].name.should.equal('newTag');
      updatedPost.tags[2].name.should.equal('anotherNewTag');
    });
  });

  describe('w/ empty tags', () => {

    beforeEach(done => {
      chai.request(server)
        .put(`/api/posts/${initialPost.id}`)
        .send({post: fieldsToUpdate, tags: []})
        .query({token: 'token'})
        .end((err, res) => {
          response = { err, res };

          sequelize.models.posts.findById(initialPost.id, {
            include: {
              model: sequelize.models.tags
            }}).then(post => {
            updatedPost = post;
            done();
          })
        });
    });

    it('should return correct data', () => {
      should.not.exist(response.err);
      updatedPost.should.have.property('title').equal('New title');
      updatedPost.should.have.property('body').equal('Much body');
    });
    it('should have deleted associations', done => {
      updatedPost.tags.should.be.an('array').and.be.empty;
      done();
    })
  });

  describe('unauthorized', () => {

    it('should return 401 and set headers if no token is provided', done => {

      chai.request(server)
        .put(`/api/posts/${initialPost.id}`)
        .send({post: fieldsToUpdate, tags: []})
        .end((err, res) => {
          err.status.should.equal(401);
          res.headers['www-authenticate'].should.equal('Bearer token_type="JWT"');
          done();
        })
    });
    it('should return 401 and set headers if token is incorrect', done => {

      chai.request(server)
        .put(`/api/posts/${initialPost.id}`)
        .send({post: fieldsToUpdate, tags: []})
        .query({token: 'invalidToken'})
        .end((err, res) => {
          err.status.should.equal(401);
          res.headers['www-authenticate'].should.equal('Bearer token_type="JWT"');
          done();
        })
    })
  })
});



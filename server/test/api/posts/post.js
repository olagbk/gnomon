'use strict';

import chaiHttp from 'chai-http';

import server from '~/dist/index';
import sequelize from '~/dist/database/sequelize';
import JWTService from '~/dist/services/jwt';

import mockJWT from '../../stubs/jwt';
import mockConfig from '../../stubs/config';

import '../../migrations.js';

const chai = require('chai').use(chaiHttp);

describe('Posts POST route', () => {

  let testPost, testTags, response;

  beforeEach(done => {
    response = null;
    JWTService.useAPI(new mockJWT());
    JWTService.useConfig(mockConfig);

    testPost = {
      title: "Proper title",
      body: "Much body"
    };
    testTags = [{
      name: 'sampleTag'
    }, {
      name: 'anotherSampleTag'
    }];
    done();
  });

  describe('with tags', () => {
    let post;

    beforeEach(done => {
      sequelize.models.posts.destroy({where: {}})
        .then(() => sequelize.models.tags.destroy({where: {}}))
        .then(() => sequelize.models.tags.bulkCreate(testTags))
        .then(() => {

          chai.request(server)
            .post('/api/posts')
            .send({post: testPost, tags: ['sampleTag', 'newTag']})
            .query({token: 'token'})
            .end((err, res) => {
              response = { err, res };

              sequelize.models.posts.find({
                where: {
                  title: testPost.title
                },
                include: {
                  model: sequelize.models.tags
                }
              }).then(p => post = p)
                .then(() => done())
            })
        })
    });

    it('should send a correctly formatted response', () => {
      should.not.exist(response.err);
      response.res.should.have.status(201);
    });
    it('should save post data', () => {
      post.dataValues.should.have.keys('id', 'title', 'body', 'tags', 'createdAt', 'updatedAt');
      post.title.should.equal('Proper title');
      post.body.should.equal('Much body');

    });
    it('should set up the associations', () => {
      post.tags.should.be.an('array');
      post.tags.length.should.equal(2);
      post.tags[0].name.should.be.oneOf(['sampleTag', 'newTag']).not.equal(post.tags[1].name);
      post.tags[1].name.should.be.oneOf(['sampleTag', 'newTag']).not.equal(post.tags[0].name);
    });
    it('should not have duplicated the existing tag', done => {
      sequelize.models.tags.findAll({where: {name: 'sampleTag'}})
        .then(tags => {
          tags.length.should.equal(1);
          done();
        })
    })
  });

  describe('when unauthorized', () => {

    it('should return 401 and set headers if no token is provided', done => {

      chai.request(server)
        .post(`/api/posts`)
        .send({post: testPost, tags: []})
        .end((err, res) => {
          err.status.should.equal(401);
          res.headers['www-authenticate'].should.equal('Bearer token_type="JWT"');
          done();
        })
    });
    it('should return 401 and set headers if token is incorrect', done => {

      chai.request(server)
        .post(`/api/posts`)
        .send({post: testPost, tags: []})
        .query({token: 'invalidToken'})
        .end((err, res) => {
          err.status.should.equal(401);
          res.headers['www-authenticate'].should.equal('Bearer token_type="JWT"');
          done();
        })
    })
  });

  describe('with no title', () => {

    beforeEach(done => {

      chai.request(server)
        .post('/api/posts')
        .send({post: {body: "Post body"}, tags: []})
        .query({token: 'token'})
        .end((err, res) => {
          response = { err, res };
          done();
        })
    });

    it('should return correctly formatted data', () => {
      should.exist(response.err);
      response.err.should.have.status(422);
    });
    it('should return a notNull Violation error', () => {
      const error = response.res.body.errors[0];
      error.should.have.property('path').equal('title');
      error.should.have.property('type').equal('notNull Violation');
    });
  });
});



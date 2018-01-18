'use strict';

import chaiHttp from 'chai-http';

import server from '~/dist/index';
import sequelize from '~/dist/database/sequelize';

import '../../migrations.js';

const chai = require('chai').use(chaiHttp);

describe('Posts GET route', () => {

  let post, response;

  beforeEach(done => {
    response = null;

    sequelize.models.posts.destroy({where: {}})
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
      .then(p => {
        post = p;
        done();
      })
  });

  describe('for all posts', () => {

    beforeEach(done => {
      chai.request(server)
        .get('/api/posts')
        .end((err, res) => {
          response = { err, res };
          done();
        });
    });

    it('it should return correctly formatted data', done => {
      should.not.exist(response.err);
      response.res.should.have.status(200);
      response.res.type.should.equal('application/json');
      response.res.body.should.be.an('array');
      response.res.body.length.should.be.equal(1);
      done();
    });
    it('should return tags', () => {
      response.res.body[0].tags.should.be.an('array');
      response.res.body[0].tags.length.should.equal(2);
    });
  });

  describe('by id', () => {

    beforeEach(done => {

      chai.request(server)
        .get(`/api/posts/${post.id}`)
        .end((err, res) => {
          response = {err, res};
          done();
        })
    });

    it('should return correctly formatted data', () => {
      should.not.exist(response.err);
      response.res.type.should.equal('application/json');
      response.res.should.have.status(200);
    });
    it('should have all required fields', () => {
      response.res.body.should.have.property('title').equal(post.title);
      response.res.body.should.have.property('body').equal(post.body);
      response.res.body.should.have.property('createdAt').equal(new Date(post.createdAt).toISOString());
      response.res.body.should.have.property('updatedAt').equal(new Date(post.updatedAt).toISOString());
      response.res.body.should.have.property('tags').an('array').of.length(2);
      const tag1 = response.res.body.tags[0].name;
      const tag2 = response.res.body.tags[1].name;
      tag1.should.be.oneOf(['sampleTag', 'anotherSampleTag']).not.equal(tag2);
      tag2.should.be.oneOf(['sampleTag', 'anotherSampleTag']).not.equal(tag1);
    })
  });
});



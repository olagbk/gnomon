'use strict';

process.env.NODE_ENV = 'test';

import chaiHttp from 'chai-http';
import exeunt from 'exeunt';

import server from '~/dist/index';
import sequelize from '~/dist/database/sequelize';

const chai = require('chai').use(chaiHttp);
const Post = require('~/dist/models/Post')(sequelize);

after(exeunt);

describe('Posts', () => {
  const post = {
    title: "Proper title",
    body: "Much body"
  };
  let postId, postResponse, postErrResponse, getResponse, getAllResponse, putResponse, delResponse;

  before((done) => { //empty the database and cache API responses
    Post.destroy({where: {}}).then(() => {

      chai.request(server)
        .post('/api/posts')
        .query(post)
        .end((err, res) => {
          postResponse = {err, res};
          postId = res.body.id;

          chai.request(server)
            .get('/api/posts')
            .end((err, res) => {
              getAllResponse = {err, res};

              chai.request(server)
                .get(`/api/posts/${postId}`)
                .end((err, res) => {
                  getResponse = {err, res};

                  post.title = "New title";

                  chai.request(server)
                    .put(`/api/posts/${postId}`)
                    .query(post)
                    .end((err, res) => {
                      putResponse = {err, res};

                      chai.request(server)
                        .delete(`/api/posts/${postId}`)
                        .end((err, res) => {
                          delResponse = {err, res};

                          chai.request(server)
                            .post('/api/posts')
                            .query({body: "Post body"})
                            .end((err, res) => {
                              postErrResponse = {err, res};
                              done();
                            })
                        })
                    });
                });
            });
        });
    });
  });

  describe('/GET posts', () => {
    it('it should return correctly formatted data', () => {
      should.not.exist(getAllResponse.err);
      getAllResponse.res.should.have.status(200);
      getAllResponse.res.type.should.equal('application/json');
      getAllResponse.res.body.should.be.a('array');
      getAllResponse.res.body.length.should.be.equal(1);
    });
  });

  describe('POST request response', () => {
    it('should return correctly formatted data', () => {
      should.not.exist(postResponse.err);
      postResponse.res.type.should.equal('application/json');
      postResponse.res.should.have.status(201);
    });
    it('should have a title and body', () => {
      postResponse.res.body.should.be.a('object');
      postResponse.res.body.should.have.property('title');
      postResponse.res.body.should.have.property('body');
    });
    it('should have timestamps', () => {
      postResponse.res.body.should.have.property('createdAt').not.equal(null);
      postResponse.res.body.should.have.property('updatedAt').not.equal(null);
    });
  });

  describe('GET post by id', () => {

    it('should return correctly formatted data', () => {
      should.not.exist(getResponse.err);
      getResponse.res.type.should.equal('application/json');
      getResponse.res.should.have.status(200);
    });
    it('should have all required fields', () => {
      getResponse.res.body.should.have.property('title');
      getResponse.res.body.should.have.property('createdAt');
      getResponse.res.body.should.have.property('updatedAt');
    })
  });

  describe('Update (PUT) post by id', () => {

    it('should return correctly formatted data', () => {
      should.not.exist(putResponse.err);
      putResponse.res.type.should.equal('application/json');
      putResponse.res.should.have.status(200);
    });
    it('should have been correctly updated', () => {
      putResponse.res.body.should.be.a('object');
      putResponse.res.body.should.have.property('title').equal('New title');
    })
  });

  describe('DELETE post by id', () => {

    it('should return correctly formatted data', () => {
      should.not.exist(delResponse.err);
      delResponse.res.should.have.status(204);
    });
    it('should return an empty body', () => {
      delResponse.res.body.should.be.empty;
    });
    it('should have been deleted from the database', (done) => {
      chai.request(server)
        .get(`/api/posts/${postId}`)
        .end((err, res) => {
          should.not.exist(res.body);
          done();
        })
    })
  });

  describe('/POST post with no title', () => {

    it('should return correctly formatted data', () => {
      should.exist(postErrResponse.err);
      postErrResponse.res.body.errors.length.should.be.equal(1);
      postErrResponse.err.should.have.status(422);
    });
    it('should return a notNull Violation error', () => {
      const error = postErrResponse.res.body.errors[0];
      error.should.have.property('path').equal('title');
      error.should.have.property('type').equal('notNull Violation');
    });
  });
});



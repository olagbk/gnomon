'use strict';

import chaiHttp from 'chai-http';

import server from '~/dist/index';
import sequelize from '~/dist/database/sequelize';
import '../migrations.js';

const chai = require('chai').use(chaiHttp);

describe('Posts route', () => {

  let testPost, testTags, response;

  beforeEach(done => {
    response = null;

    testPost = {
      title: "Proper title",
      body: "Much body"
    };
    testTags = [{
      name: 'sampleTag'
    }, {
      name: 'anotherSampleTag'
    }];

    sequelize.models.posts.destroy({
      where: {}
    }).then(() => done());
  });

  describe('/GET all', () => {

    beforeEach(done => {
      testPost.tags = testTags;

      sequelize.models.posts.create(testPost, {
        include: sequelize.models.tags
      }).then(() => {

        chai.request(server)
          .get('/api/posts')
          .end((err, res) => {
          response = {err, res};
          done();
        });
      });
    });

    it('it should return correctly formatted data', done => {
      should.not.exist(response.err);
      response.res.should.have.status(200);
      response.res.type.should.equal('application/json');
      response.res.body.should.be.a('array');
      response.res.body.length.should.be.equal(1);
      done();
    });
    it('should return tags', () => {
      response.res.body[0].tags.should.be.an('array');
      response.res.body[0].tags.length.should.equal(2);
    });
  });

  describe('GET by id', () => {
    let post;

    beforeEach(done => {
      testPost.tags = testTags;

      sequelize.models.posts.create(testPost, {
        include: sequelize.models.tags
      }).then(instance => {

        post = instance;

        chai.request(server)
          .get(`/api/posts/${post.id}`)
          .end((err, res) => {
            response = {err, res};
            done();
        })
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
      response.res.body.tags[0].name.should.equal(testTags[0].name);
      response.res.body.tags[1].name.should.equal(testTags[1].name);
    })
  });

  describe('POST', () => {

    beforeEach(done => {

      chai.request(server)
        .post('/api/posts')
        .send({post: testPost, tags: []})
        .end((err, res) => {
          response = {err, res};
          done();
        });
    });

    it('should return correctly formatted data', () => {
      should.not.exist(response.err);
      response.res.type.should.equal('application/json');
      response.res.should.have.status(201);
    });
    it('should have a title and body', () => {
      response.res.body.post.should.be.a('object');
      response.res.body.post.should.have.property('title').equal(testPost.title);
      response.res.body.post.should.have.property('body').equal(testPost.body);
    });
    it('should have timestamps', () => {
      response.res.body.post.should.have.property('createdAt').not.equal(null);
      response.res.body.post.should.have.property('updatedAt').not.equal(null);
    });
    it('should return an empty tag set', () => {
      response.res.body.tags.should.be.an('array');
      response.res.body.tags.should.be.empty;
    });
  });

  describe('POST w/ tags', () => {

    beforeEach(done => {
      sequelize.models.tags.destroy({
        where: {}
      }).then(() => {
        sequelize.models.tags.bulkCreate(testTags).then(tags => {

          chai.request(server)
            .post('/api/posts')
            .send({post: testPost, tags: ['sampleTag', 'newTag']})
            .end((err, res) => {
              response = {err, res};
              done();
            });
        })
      });
    });

    it('should return correctly formatted data', () => {
      should.not.exist(response.err);
      response.res.type.should.equal('application/json');
      response.res.should.have.status(201);
    });
    it('should return tags', () => {
      response.res.body.tags.should.be.an('array');
      response.res.body.tags.length.should.equal(2);
      response.res.body.tags[0][0].name.should.equal('sampleTag');
      response.res.body.tags[1][0].name.should.equal('newTag');
      response.res.body.tags[0][1].should.equal(false); //not created
      response.res.body.tags[1][1].should.equal(true); // created
    });
    it('should set up the associations', done => {
      sequelize.models.posts.find({
        where: {
          id: response.res.body.post.id
        },
        include: {
          model: sequelize.models.tags
      }}).then(post => {

        post.tags.length.should.equal(2);
        post.tags[0].name.should.equal('sampleTag');
        post.tags[1].name.should.equal('newTag');
        done();
      })
    });
    it('should save associations in post_tags table', done => {
      sequelize.models.post_tags.findAll({
        where: {
          postId: response.res.body.post.id
        }}).then(ptags => {
          ptags.should.be.an('array').of.length(2);
          done();
      })
    })
  });

  describe('/POST post with no title', () => {

    beforeEach(done => {

      chai.request(server)
        .post('/api/posts')
        .send({post: {body: "Post body"}, tags: []})
        .end((err, res) => {
          response = {err, res};
          done();
        })
    });

    it('should return correctly formatted data', () => {
      should.exist(response.err);
      response.res.body.errors.length.should.be.equal(1);
      response.err.should.have.status(422);
    });
    it('should return a notNull Violation error', () => {
      const error = response.res.body.errors[0];
      error.should.have.property('path').equal('title');
      error.should.have.property('type').equal('notNull Violation');
    });
  });

  describe('Update (PUT)', () => {
    let initialPost, updatedPost;

    beforeEach(done => {
      sequelize.models.tags.destroy({
        where: {}
      }).then(() => {
        testPost.tags = testTags;

        sequelize.models.posts.create(testPost, {
          include: sequelize.models.tags
        }).then(instance => {
          initialPost = instance;
          updatedPost = Object.assign({}, initialPost.dataValues, {title: 'New title'});
          done();
        });
      });
    });

    describe('preserve tags', () => {

      beforeEach(done => {

        chai.request(server)
          .put(`/api/posts/${initialPost.id}`)
          .send({post: updatedPost, tags: initialPost.tags.map(t => t.name)})
          .end((err, res) => {
            response = {err, res};
            done();
          });
      });

      it('should return correctly formatted data', () => {
        should.not.exist(response.err);
        response.res.type.should.equal('application/json');
        response.res.should.have.status(200);
      });
      it('should have been correctly updated', () => {
        response.res.body.post.should.be.an('object');
        response.res.body.post.should.have.property('title').equal('New title');
      });
      it('should have kept the associations', done => {
        sequelize.models.posts.find({
          where: {
            id: response.res.body.post.id
          }, include: {
            model: sequelize.models.tags
          }}).then(post => {
          post.tags.length.should.equal(2);
          post.tags[0].name.should.equal('sampleTag');
          post.tags[1].name.should.equal('anotherSampleTag');
          done();
        })
      })
    });

    describe('update tags', () => {

      beforeEach(done => {
        chai.request(server)
          .put(`/api/posts/${initialPost.id}`)
          .send({post: updatedPost, tags: ['sampleTag', 'newTag', 'anotherNewTag']})
          .end((err, res) => {
            response = {err, res};
            done();
          });
      });

      it('should have been correctly updated', () => {
        should.not.exist(response.err);
        response.res.body.post.should.be.an('object');
        response.res.body.post.should.have.property('title').equal('New title');
      });
      it('should have added and deleted associations', done => {
        sequelize.models.posts.find({
          where: {
            id: response.res.body.post.id
          }, include: {
            model: sequelize.models.tags
          }
        }).then(post => {
          post.tags.length.should.equal(3);
          post.tags[0].name.should.equal('sampleTag');
          post.tags[1].name.should.equal('newTag');
          post.tags[2].name.should.equal('anotherNewTag');
          done();
        })
      });
    });

  describe('w/ empty tags', () => {

    beforeEach(done => {
      chai.request(server)
        .put(`/api/posts/${initialPost.id}`)
        .send({post: updatedPost, tags: []})
        .end((err, res) => {
          response = {err, res};
          done();
        });
    });

    it('should return correct data', () => {
      should.not.exist(response.err);
      response.res.body.post.should.have.property('title').equal('New title');
      response.res.body.post.should.have.property('body').equal('Much body');
    });
    it('should have deleted associations', done => {
      sequelize.models.posts.find({
        where: {
          id: response.res.body.post.id
        }, include: {
          model: sequelize.models.tags
        }}).then(post => {
        post.tags.should.be.an('array').and.be.empty;
        done();
      })
    })
    });
   });

  describe('DELETE post', () => {
    let post;

    beforeEach(done => {
      testPost.tags = testTags;
      sequelize.models.posts.create(testPost).then(instance => {
        post = instance;

        chai.request(server)
          .delete(`/api/posts/${post.id}`)
          .end((err, res) => {
          response = {err, res};
          done();
        })
      });
    });

    it('should return correctly formatted data', () => {
      should.not.exist(response.err);
      response.res.should.have.status(204);
      response.res.body.should.be.empty;
    });
    it('should have been deleted from the database', done => {
      chai.request(server)
        .get(`/api/posts/${post.id}`)
        .end((err, res) => {
          should.not.exist(res.body);
          done();
        })
    });
    it('should have deleted associations', done => {
      sequelize.models.post_tags.findAll({
        where: {
          postId: post.id
        }}).then(ptags => {
        ptags.should.be.an('array').and.be.empty;
        done();
      })
    })
  });
});



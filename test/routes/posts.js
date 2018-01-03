'use strict';

import chaiHttp from 'chai-http';

import server from '~/dist/index';
import sequelize from '~/dist/database/sequelize';
import defineModels from '~/dist/models/index';
import '../migrations.js';

const chai = require('chai').use(chaiHttp);
const models = defineModels(sequelize);

describe('Posts route', () => {

  let testPostData, testTag, response;

  before(done => {
    models.Tag.destroy({where: {}}).then(() => {

      models.Tag.create({name: 'sampleTag'}).then(tag => {
        testTag = tag;
        done();
      })
    })
  });

  beforeEach(done => {

    response = null;

    testPostData = {
      title: "Proper title",
      body: "Much body"
    };

    models.Post.destroy({where: {}}).then(() => {
      done();
    });
  });

  // after(done => {
  //   models.Post.destroy({where: {}}).then(() => {
  //
  //     models.Tag.destroy({where: {}}).then(() => {
  //       done();
  //     })
  //   });
  // });


  describe('/GET response', () => {
    it('it should return correctly formatted data', done => {

      models.Post.bulkCreate([
        {title: 'First post title', body: 'First post body'},
        {title: 'Second post title', body: 'Second post body'}
      ])
        .then(() => {
          chai.request(server)
            .get('/api/posts')
            .end((err, res) => {
              response = {err, res};

              should.not.exist(response.err);
              response.res.should.have.status(200);
              response.res.type.should.equal('application/json');
              response.res.body.should.be.a('array');
              response.res.body.length.should.be.equal(2);
              done();
            })
        });
    });

    describe('POST response', () => {

      beforeEach(done => {
        chai.request(server)
          .post('/api/posts')
          .query(testPostData)
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
        response.res.body.should.be.a('object');
        response.res.body.should.have.property('title').equal(testPostData.title);
        response.res.body.should.have.property('body').equal(testPostData.body);
      });
      it('should have timestamps', () => {
        response.res.body.should.have.property('createdAt').not.equal(null);
        response.res.body.should.have.property('updatedAt').not.equal(null);
      });
    });

    describe('POST w/ tags', () => {

      beforeEach(done => {
        testPostData.tags = ['sampleTag', 'anotherTag'];

        chai.request(server)
          .post('/api/posts')
          .query(testPostData)
          .end((err, res) => {
            response = {err, res};
            done();
          });
      });

      it('should work', () => {
        should.not.exist(response.err);
      })

    });

    describe('GET by id', () => {
      let post;

      beforeEach(done => {
        models.Post.create(testPostData).then(data => {
          post = data;

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
      })
    });

    describe('Update (PUT)', () => {

      beforeEach(done => {
        models.Post.create(testPostData).then(post => {

          chai.request(server)
            .put(`/api/posts/${post.id}`)
            .send({title: 'New title'})
            .end((err, res) => {

            response = {err, res};
            done();
          });
        });
      });

      it('should return correctly formatted data', () => {
        should.not.exist(response.err);
        response.res.type.should.equal('application/json');
        response.res.should.have.status(200);
      });
      it('should have been correctly updated', () => {
        response.res.body.should.be.a('object');
        response.res.body.should.have.property('title').equal('New title');
      })
    });

    describe('DELETE post', () => {
      let post;

      beforeEach(done => {
        models.Post.create(testPostData).then(data => {
          post = data;

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
      });
      it('should return an empty body', () => {
        response.res.body.should.be.empty;
      });
      it('should have been deleted from the database', (done) => {
        chai.request(server)
          .get(`/api/posts/${post.id}`)
          .end((err, res) => {
            should.not.exist(res.body);
            done();
          })
      })
    });

    describe('/POST post with no title', () => {

      beforeEach(done => {

        chai.request(server)
          .post('/api/posts')
          .query({body: "Post body"})
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
  });
});



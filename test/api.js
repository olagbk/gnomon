process.env.NODE_ENV = 'test';

import chai from 'chai';
import chaiHttp from 'chai-http';
import exeunt from 'exeunt';

import server from '~/dist/index';
import sequelize from '~/dist/database/sequelize';

const Post = require('~/dist/models/Post')(sequelize);
const should = chai.should();

chai.use(chaiHttp);

describe('Posts', () => {
  beforeEach((done) => { //empty the database before each test
    Post.destroy({where: {}}).then(() => done()); //must be wrapped
  });
  /*
    * Test the /GET route
    */
  describe('/GET posts', () => {
    it('it should GET an empty posts array', (done) => {
      chai.request(server)
        .get('/api/posts')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });
  /*
  * Test the /POST route
  */
  describe('/POST, GET, PUT and DELETE a single post', () => {
    const post = {
      title: "Proper title",
      body: "Much body"
    };
    let postId, postResponse, getResponse, putResponse, delResponse;

    before(done => {
      chai.request(server)
        .post('/api/posts')
        .query(post)
        .end((err, postRes) => {
        postResponse = postRes;
        postId = postRes.body.id;

        chai.request(server)
          .get(`/api/posts/${postId}`)
          .end((err, getRes) => {
          getResponse = getRes;

            post.title = "New title";

            chai.request(server)
              .put(`/api/posts/${postId}`)
              .query(post)
              .end((err, putRes) => {
              putResponse = putRes;

              chai.request(server)
                .delete(`/api/posts/${postId}`)
                .end((err, delRes) => {
                delResponse = delRes;
                done();
                })
            });
          });
      })
    });

    describe('POST request response', () => {
      it('should return status 201', () => {
        postResponse.should.have.status(201);
      });
      it('should have a title and body', () => {
        postResponse.body.should.be.a('object');
        postResponse.body.should.have.property('title');
        postResponse.body.should.have.property('body');
      });
      it('should have timestamps', () => {
        postResponse.body.should.have.property('createdAt').not.equal(null);
        postResponse.body.should.have.property('updatedAt').not.equal(null);
      });
    });

    describe('GET post by id', () => {

      it('should return status 200', () => {
        getResponse.should.have.status(200);
      });
      it('should have all required fields', () => {
        getResponse.body.should.have.property('title');
        getResponse.body.should.have.property('createdAt');
        getResponse.body.should.have.property('updatedAt');
      })
    });

    describe('Update (PUT) post by id', () => {

      it('should return status 200', () => {
        putResponse.should.have.status(200);
      });
      it('should have been correctly updated', () => {
        putResponse.body.should.be.a('object');
        putResponse.body.should.have.property('title').equal('New title');
      })
    });

    describe('DELETE post by id', () => {

      it('should return status 204', () => {
        delResponse.should.have.status(204);
      });
      it('should return an empty body', () => {
        delResponse.body.should.be.empty;
      })
    })
  });

  describe('/POST post with no title', () => {
    const post = {
      body: "Post body"
    };
    let response;

    before(done => {
      chai.request(server)
        .post('/api/posts')
        .query(post).end((err, res) => {
        response = res;
        done();
      })
    });

    it('should return status 422', () => {
      response.should.have.status(422);
    });
    it('should return one error', () => {
      response.body.should.be.a('object');
      response.body.should.have.property('errors');
      response.body.errors.length.should.be.equal(1);

    });
    it('should return a notNull Violation error', () => {
      const error = response.body.errors[0];
      error.should.have.property('path').equal('title');
      error.should.have.property('type').equal('notNull Violation');
    });
  });
  after(exeunt);
});



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
  describe('/POST a post', () => {
    const post = {
      title: "Proper title",
      body: "Much body"
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

    it('should return status 200', () => {
      response.should.have.status(200);
    });
    it('should have a title and body', () => {
      response.body.should.be.a('object');
      response.body.should.have.property('title');
      response.body.should.have.property('body');
    });
    it('should have timestamps', () => {
      response.body.should.have.property('createdAt');
      response.body.should.have.property('updatedAt');
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
      response.body.errors.length.should.be.eql(1);

    });
    it('should return a notNull Violation error', () => {
      const error = response.body.errors[0];
      error.should.have.property('path').eql('title');
      error.should.have.property('type').eql('notNull Violation');
    });
  });
  after(exeunt);
});



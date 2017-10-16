process.env.NODE_ENV = 'development';

import chai from 'chai';
import chaiHttp from 'chai-http';
import exeunt from 'exeunt';

import server from '~/dist/index';
import sequelize from '~/dist/database/sequelize';

const Post = require('~/dist/models/Post')(sequelize);
const should = chai.should();

chai.use(chaiHttp);

//Our parent block
describe('Posts', () => {
  beforeEach((done) => { //Before each test we empty the database
    Post.destroy({where: {}}).then(() => done()); //must be wrapped
  });
  /*
    * Test the /GET route
    */
  describe('/GET posts', () => {
    it('it should GET all the posts', (done) => {
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

  describe('/POST post', () => {
    it('it should not POST a post without a title', (done) => {
      const post = {
        body: "Post body"
      };
      chai.request(server)
        .post('/api/posts')
        .query(post)
        .end((err, res) => {

          res.should.have.status(422);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors.length.should.be.eql(1);

          const error = res.body.errors[0];
          error.should.have.property('path').eql('title');
          error.should.have.property('type').eql('notNull Violation');
          done();
        });
    });
    it('it should POST a post ', (done) => {
      const post = {
        title: "Proper title",
        body: "Much body"
      };
      chai.request(server)
        .post('/api/posts')
        .query(post)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('title');
          res.body.should.have.property('body');
          res.body.should.have.property('createdAt');
          res.body.should.have.property('updatedAt');
          exeunt();
          done();
        });
    })
  })
});

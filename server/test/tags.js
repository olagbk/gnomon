'use strict';

import chaiHttp from 'chai-http';

import server from '~/dist/index';
import sequelize from '~/dist/database/sequelize';
import './migrations.js';

const chai = require('chai').use(chaiHttp);

describe('Tags route', () => {

  let testTags, testPosts, response;

  beforeEach(done => {
    response = null;

    testTags = [{
      name: 'Never'
    }, {
      name: 'gonna'
    }, {
      name: 'give'
    }, {
      name: 'you'
    }, {
      name: 'up'
    }];

    testPosts = [{
      title: 'Never gonna'
    }, {
      title: 'let you down'
    }];

    sequelize.models.tags.destroy({
      where: {}
    }).then(() => {

      sequelize.models.tags.bulkCreate(testTags, {returning: true})
        .then(tags => {

          const never = tags.find(t => t.name === 'Never');
          const gonna = tags.find(t => t.name === 'gonna');

          sequelize.models.posts.bulkCreate(testPosts, {returning: true}).then(posts => {

            Promise.all([
              posts[0].setTags([never, gonna]),
              posts[1].setTags([never])
            ]).then(() => done());
          })
        });
    });
  });

  describe('/GET all', () => {

    beforeEach(done => {
      chai.request(server)
        .get('/api/tags')
        .end((err, res) => {
          response = {err, res};
          done();
        });
    });

    it('should return correctly formatted data', () => {
      should.not.exist(response.err);
      response.res.should.have.status(200);
      response.res.type.should.equal('application/json');
      response.res.body.should.be.an('array');
      response.res.body.length.should.be.equal(5);
    });
    it('should return the right count', () => {
      const never = response.res.body.find(t => t.name === 'Never');
      const gonna = response.res.body.find(t => t.name === 'gonna');
      const others = response.res.body.filter(t => t.name !== 'Never' && t.name !== 'gonna');
      never.count.should.equal('2');
      gonna.count.should.equal('1');
      for (const tag of others) {
        tag.count.should.equal('0');
      }
    })
  });
});



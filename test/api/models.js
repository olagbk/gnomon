//'use strict';

process.env.NODE_ENV = 'test';

import fs from 'fs';

import sequelize from '~/dist/database/sequelize';

const models = {};

describe('models', () => {
  before(done => {
    fs.readdir('dist/models', (err, files) => {
      for (let file of files){
        models[file.split('.')[0]] = require('~/dist/models/' + file);
      }
      //({ Post } = models);
      done();
    });
  });

  describe('Post', () => {
    let Post;

    beforeEach(done => {
      Post = models.Post(sequelize);
      done();
    });
    it('calling with sequelize should return a Model', () => {
      Object.getPrototypeOf(Post).name.should.equal("Model");
    });
    it('should be linked to the posts table', () => {
      Post.tableName.should.equal('posts');
    });
    it('should have expected attributes', () => {
      Post.attributes.should.have.all.keys('id', 'title', 'body', 'createdAt', 'updatedAt');

      Post.attributes.id.type.key.should.equal('INTEGER');
      Post.attributes.id.allowNull.should.equal(false);

      Post.attributes.title.type.key.should.equal('STRING');
      Post.attributes.id.allowNull.should.equal(false);

      Post.attributes.body.type.key.should.equal('TEXT');

    })
  })
});



'use strict';

import fs from 'fs';
import Sequelize from 'sequelize';

import sequelize from '~/dist/database/sequelize';

const migrations = {};

describe('Sequelize migration', () => {

  before(done => {
    fs.readdir('dist/database/migrations', (err, files) => {

      for (let file of files) {
        const key = file.split('_')[0];
        migrations[key] = require('~/dist/database/migrations/' + file);
      }
      sequelize.queryInterface
        .dropAllTables()
        .then(
          () => done(),
          (err) => done(err));
    });
  });

  it('should create the posts table', done => {
    migrations['001'].up(sequelize.queryInterface, Sequelize, () => {

      const posts = sequelize.models.posts;

      should.exist(posts);

      posts.attributes.should.have.property('id');
      posts.attributes.id.type.key.should.equal('INTEGER');
      posts.attributes.id.allowNull.should.equal(false);

      posts.attributes.should.have.property('title');
      posts.attributes.title.type.key.should.equal('STRING');
      posts.attributes.id.allowNull.should.equal(false);

      posts.attributes.should.have.property('body');
      posts.attributes.body.type.key.should.equal('TEXT');
      should.not.exist(posts.attributes.body.allowNull); //true by default

      posts.options.timestamps.should.equal(true);

      done();
    });
  });
  it('should create the albums table', done => {
    migrations['002'].up(sequelize.queryInterface, Sequelize, () => {

      const albums = sequelize.models.albums;

      should.exist(albums);

      albums.attributes.should.have.property('id');
      albums.attributes.id.type.key.should.equal('INTEGER');
      albums.attributes.id.allowNull.should.equal(false);

      albums.attributes.should.have.property('type');
      albums.attributes.type.type.key.should.equal('STRING');
      albums.attributes.type.allowNull.should.equal(false);

      albums.attributes.should.have.property('albumId');
      albums.attributes.albumId.type.key.should.equal('STRING');
      albums.attributes.albumId.allowNull.should.equal(false);

      albums.attributes.should.have.property('name');
      albums.attributes.name.type.key.should.equal('STRING');
      should.not.exist(albums.attributes.name.allowNull); // true by default

      albums.attributes.should.have.property('filename');
      albums.attributes.filename.type.key.should.equal('STRING');
      should.not.exist(albums.attributes.filename.allowNull); //true by default

      albums.options.timestamps.should.equal(false);

      done();
    });
  });
  it('should create tags and post_tags', done => {
    migrations['003'].up(sequelize.queryInterface, Sequelize, () => {

      const tags = sequelize.models.tags;

      should.exist(tags);

      tags.attributes.should.have.property('name');
      tags.attributes.name.type.key.should.equal('STRING');
      tags.attributes.name.allowNull.should.equal(false);

      tags.options.timestamps.should.equal(false);

      done();
    });
  });
  it('should create post_tags', done => {
    migrations['004'].up(sequelize.queryInterface, Sequelize, () => {

      const posts = sequelize.models.posts;
      const tags = sequelize.models.tags;
      const ptags = sequelize.models.post_tags;

      should.exist(ptags);

      should.exist(tags.associations.posts);
      should.exist(posts.associations.tags);

      ptags.primaryKeyAttributes.should.include('postId');
      ptags.primaryKeyAttributes.should.include('tagId');

      done();
    });
  });
});

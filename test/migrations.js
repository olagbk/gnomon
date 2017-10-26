'use strict';

process.env.NODE_ENV = 'test';

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
      done();
    });
  });

  beforeEach(function (done) {
    // Setup the database
    sequelize.queryInterface
      .dropAllTables()
      .then(
        () => done(),
        (err) => done(err));
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
      posts.attributes.body.type.key.should.equal('STRING');

      posts.options.timestamps.should.equal(true);

      done();
    });
  });
});

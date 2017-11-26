'use strict';

import path from 'path';

export default {
  up: (queryInterface, Sequelize, done) => {

    const Tag = queryInterface.sequelize.import(path.join(path.resolve(), '/dist/models/Tag.js'));
    const Post = queryInterface.sequelize.import(path.join(path.resolve(), '/dist/models/Post.js'));

    queryInterface.sequelize.sync().then(() => done());
  },
  down: (queryInterface, Sequelize, done) => {
    return queryInterface.dropTable('PostTags', {}).then(() => {
      queryInterface.dropTable('tags', {}).then(() => done())
    })
  }
};


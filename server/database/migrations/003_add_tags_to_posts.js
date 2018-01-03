'use strict';

import path from 'path';

export default {
  up: (queryInterface, Sequelize, done) => {
    queryInterface.sequelize.import(path.join(path.resolve(), '/dist/models/Tag.js'));
    queryInterface.sequelize.import(path.join(path.resolve(), '/dist/models/Post.js'));
    queryInterface.sequelize.sync().then(() => done());
  },
  down: (queryInterface, Sequelize, done) => {
    queryInterface.dropTable('tags', {}).then(() => done())
  }
};


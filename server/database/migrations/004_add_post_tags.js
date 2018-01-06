'use strict';

import path from 'path';

export default {
  up: (queryInterface, Sequelize, done) => {
    queryInterface.sequelize.import(path.join(path.resolve(), '/dist/models/PostTag.js'));
    queryInterface.sequelize.sync().then(() => done());
  },
  down: (queryInterface, Sequelize, done) => {
    queryInterface.dropTable('post_tags', {}).then(() => done())
  }
};


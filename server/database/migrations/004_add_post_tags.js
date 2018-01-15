'use strict';

import path from 'path';

export default {
  up: (queryInterface, Sequelize, done) => {
    const model = queryInterface.sequelize.import(path.join(path.resolve(), '/dist/models/PostTag.js'));
    model.sync().then(() => done());
  },
  down: (queryInterface, Sequelize, done) => {
    queryInterface.dropTable('post_tags', {}).then(() => done())
  }
};


'use strict';

import path from 'path';

export default {
  up: (queryInterface, Sequelize, done) => {
    const model = queryInterface.sequelize.import(path.join(path.resolve(), '/dist/models/Tag.js'));
    model.sync().then(() => done());
  },
  down: (queryInterface, Sequelize, done) => {
    queryInterface.dropTable('tags', {}).then(() => done())
  }
};


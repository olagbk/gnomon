'use strict';

import path from 'path';

export default {
  up: (queryInterface, Sequelize, done) => {

    const model = queryInterface.sequelize.import(path.join(path.resolve(), '/dist/models/Album.js'));

    model.sync().then(() => done()); //must be wrapped
  },
  down: (queryInterface, Sequelize, done) => {
    return queryInterface.dropTable('albums').then(() => done());
  }
};


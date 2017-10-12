'use strict';

import path from 'path';

export default {
  up: (queryInterface, Sequelize, done) => {

    const model = queryInterface.sequelize.import(path.join(path.resolve(), '/dist/server/models/Post.js'));

    model.sync().then(() => done());
  }
};


'use strict';

import path from 'path';

export default {
  up: (queryInterface, Sequelize, done) => {

    const model = queryInterface.sequelize.import(path.join(path.resolve(), '/dist/models/Post.js'));

    model.sync({force: true}).then(() => done()); //must be wrapped

  }
};


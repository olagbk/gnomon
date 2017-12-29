'use strict';

export default {
  up: (queryInterface, Sequelize, done) => {
    queryInterface.removeColumn(
      'tags',
      'count'
    ).then(() => done());
  },
  down: (queryInterface, Sequelize, done) => {
    queryInterface.addColumn(
      'tags',
      'count',
      Sequelize.INTEGER
    ).then(() => {done()});
  }
};


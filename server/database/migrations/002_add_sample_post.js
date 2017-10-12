'use strict';

export default {
  up: (queryInterface, Sequelize, done) => {
    queryInterface.sequelize.models.posts.create({ title: "I'm a post!", body: "I came from the database!" })
      .then(() => done())
  }
};

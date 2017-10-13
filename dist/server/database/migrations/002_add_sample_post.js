'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  up: function up(queryInterface, Sequelize, done) {
    queryInterface.sequelize.models.posts.create({ title: "I'm a post!", body: "I came from the database!" }).then(function () {
      return done();
    });
  }
};
module.exports = exports["default"];
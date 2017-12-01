'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  up: function up(queryInterface, Sequelize, done) {

    var model = queryInterface.sequelize.import(_path2.default.join(_path2.default.resolve(), '/dist/models/Album.js'));

    model.sync().then(function () {
      return done();
    }); //must be wrapped
  },
  down: function down(queryInterface, Sequelize, done) {
    return queryInterface.dropTable('albums').then(function () {
      return done();
    });
  }
};
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  up: function up(queryInterface, Sequelize, done) {

    var model = queryInterface.sequelize.import(_path2.default.join(_path2.default.resolve(), '/dist/server/models/Post.js'));

    model.sync().then(function () {
      return done();
    });
  }
};
module.exports = exports['default'];
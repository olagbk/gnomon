'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  up: function up(queryInterface, Sequelize, done) {

    var Tag = queryInterface.sequelize.import(_path2.default.join(_path2.default.resolve(), '/dist/models/Tag.js'));
    var Post = queryInterface.sequelize.import(_path2.default.join(_path2.default.resolve(), '/dist/models/Post.js'));

    queryInterface.sequelize.sync().then(function () {
      return done();
    });
  },
  down: function down(queryInterface, Sequelize, done) {
    return queryInterface.dropTable('PostTags', {}).then(function () {
      queryInterface.dropTable('tags', {}).then(function () {
        return done();
      });
    });
  }
};
module.exports = exports['default'];
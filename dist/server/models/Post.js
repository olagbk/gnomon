'use strict';

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (sequelize) {

  return sequelize.define('posts', {
    title: _sequelize2.default.STRING,
    body: _sequelize2.default.STRING
  });
};
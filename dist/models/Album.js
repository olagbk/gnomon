'use strict';

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (sequelize) {

  return sequelize.define('albums', {

    type: {
      type: _sequelize2.default.STRING,
      allowNull: false
    },
    album_id: {
      type: _sequelize2.default.STRING,
      allowNull: false
    },
    name: {
      type: _sequelize2.default.STRING
    },
    filename: {
      type: _sequelize2.default.STRING
    }
  }, {
    timestamps: false
  });
};
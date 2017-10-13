'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _database = require('../../../config/database.json');

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var env = process.env.NODE_ENV || 'development';
var sequelize = process.env.DATABASE_URL ? new _sequelize2.default(process.env.DATABASE_URL, {
  "ssl": true,
  "dialectOptions": {
    "ssl": true
  }
}) : new _sequelize2.default(_database2.default[env].database, _database2.default[env].username, _database2.default[env].password, {
  dialect: _database2.default[env].dialect,
  host: _database2.default[env].host
});

exports.default = sequelize;
module.exports = exports['default'];
'use strict';
const Sequelize = require('sequelize');
const config = require('../../config/config.json');
const env = process.env.NODE_ENV || 'development';

let sequelize =
  (process.env.DATABASE_URL) ?
    new Sequelize(process.env.DATABASE_URL, {
    "ssl": true,
    "dialectOptions": {
      "ssl": true
    }
  }) :
    new Sequelize(config[env].database.name, config[env].database.username, config[env].database.password, {
    dialect: 'postgres',
    host: config[env].database.host
  });

module.exports = sequelize;

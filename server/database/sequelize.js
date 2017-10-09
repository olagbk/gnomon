'use strict';
const Sequelize = require('sequelize');

module.exports = new Sequelize('gnomon', null, null, {
  dialect: 'sqlite',
  storage: './server/database/gnomon.db'
});

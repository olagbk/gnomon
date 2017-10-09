'use strict';

const Sequelize = require('sequelize');

module.exports = function(sequelize){
  return sequelize.define('posts', {
    title: Sequelize.STRING,
    body: Sequelize.STRING
  });
};


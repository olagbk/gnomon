'use strict';

import Sequelize from 'sequelize';

module.exports = (sequelize) => {

  return sequelize.define('posts', {
    title: Sequelize.STRING,
    body: Sequelize.STRING
  });
};


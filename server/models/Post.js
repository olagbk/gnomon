'use strict';

import Sequelize from 'sequelize';

module.exports = (sequelize) => {

  return sequelize.define('posts', {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    body: Sequelize.STRING
  });
};


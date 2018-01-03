'use strict';

import Sequelize from 'sequelize';

export default (sequelize) => {

  return sequelize.define('posts', {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    body: Sequelize.TEXT
  });
};


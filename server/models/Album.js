'use strict';

import Sequelize from 'sequelize';

export default (sequelize) => {

  return sequelize.define('albums', {

    type: {
      type: Sequelize.STRING,
      allowNull: false
    },
    albumId: {
      type: Sequelize.STRING,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING
    },
    filename: {
      type: Sequelize.STRING
    },
  },
    {
      timestamps: false
    });
};


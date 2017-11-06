'use strict';

import Sequelize from 'sequelize';

module.exports = (sequelize) => {

  return sequelize.define('albums', {

    type: {
      type: Sequelize.STRING,
      allowNull: false
    },
    album_id: {
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


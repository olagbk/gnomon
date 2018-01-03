'use strict';

import Sequelize from 'sequelize';

export default (sequelize) => {
  return sequelize.define('tags', {

      name: {
        type: Sequelize.STRING,
        allowNull: false
      }
    },
    {
      timestamps: false
    });
};


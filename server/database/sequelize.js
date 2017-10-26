'use strict';

import Sequelize from 'sequelize';
import config from '~/config/database.json';

const env = process.env.NODE_ENV || 'development';
const sequelize =
  (process.env.DATABASE_URL) ?
    new Sequelize(process.env.DATABASE_URL, {
    "ssl": true,
    "dialectOptions": {
      "ssl": true
    }
  }) :
    new Sequelize(config[env].database, config[env].username, config[env].password, {
    dialect: config[env].dialect,
    host: config[env].host
  });

export default sequelize;

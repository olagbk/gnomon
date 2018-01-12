'use strict';

import express from 'express';

import sequelize from './database/sequelize';
import models from './models/index';
import routes from './routes/index';

const router = express.Router();

sequelize
  .authenticate()
  .then(() => {
    models(sequelize);
    routes(router, sequelize);
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export default router;

'use strict';

import express from 'express';

import sequelize from './database/sequelize';
import defineModels from './models/index';
import defineRoutes from './routes/index';

const router = express.Router();

sequelize
  .authenticate()
  .then(() => {
    defineModels(sequelize);
    defineRoutes(router, sequelize);
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export default router;

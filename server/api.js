'use strict';

import express from 'express';
import fs from 'fs';

import sequelize from './database/sequelize';

const router = express.Router();

sequelize
  .authenticate()
  .then(() => {

    console.log('Connection has been established successfully.');

    //define models and controllers
    fs.readdir('server/models', (err, files) => {

      for (let file of files) {
        require(`./models/${file}`)(sequelize)
      }

      fs.readdir('server/routes', (err, files) => {

        for (let file of files) {
          require(`./routes/${file}`)(router, sequelize);
        }
      });
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


// middleware to use for all requests
router.use((req, res, next) => {
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

export default router;

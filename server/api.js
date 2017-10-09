const express = require('express');
const path = require('path');
const gulp = require('gulp');
const tap = require('gulp-tap');
const router = express.Router();

require('./routes.js')(router);

// middleware to use for all requests
router.use(function(req, res, next) {
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});


module.exports = router;

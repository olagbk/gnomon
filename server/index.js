const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./api');

const app = express();
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(path.resolve(), 'dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(path.resolve(), 'dist/index.html'));
});

const port = process.env.PORT || '3000';
app.listen(port);


module.exports = app;

'use strict';
import 'module-alias/register';

import express from 'express';
import path from 'path';

import api from './api';

const app = express();
const port = process.env.PORT || '3000';

// Parsers for POST data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Point static path to dist/client
app.use(express.static(path.join(path.resolve(), 'dist/client')));

// Set api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(path.resolve(), 'dist/client/index.html'));
});

app.listen(port);


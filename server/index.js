'use strict';

import express from 'express';
import path from 'path';

import api from './api';
import config from '~/config/config.json';

const app = express();
const port = process.env.PORT || '3000';

app.set('JWTsecret', config.auth.JWTsecret);

// Parsers for POST data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(path.resolve(), 'dist/public')));

// Set api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(path.resolve(), 'dist/public/index.html'));
});

app.listen(port);

export default app;

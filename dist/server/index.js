'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || '3000';

// Parsers for POST data
app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: false }));

// Point static path to dist/client
app.use(_express2.default.static(_path2.default.join(_path2.default.resolve(), 'dist/client')));

// Set api routes
app.use('/api', _api2.default);

// Catch all other routes and return the index file
app.get('*', function (req, res) {
  res.sendFile(_path2.default.join(_path2.default.resolve(), 'dist/client/index.html'));
});

app.listen(port);
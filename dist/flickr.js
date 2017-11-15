'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flickrapi = require('flickrapi');

var _flickrapi2 = _interopRequireDefault(_flickrapi);

var _config = require('../config/config.json');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new Promise(function (resolve, reject) {

  _flickrapi2.default.tokenOnly({
    api_key: _config2.default.flickr.key,
    secret: _config2.default.flickr.secret
  }, function (error, flickr) {
    if (error) console.log(error);
    resolve(flickr);
  });
});
module.exports = exports['default'];
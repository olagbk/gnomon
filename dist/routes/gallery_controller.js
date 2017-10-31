'use strict';

var _flickr = require('../flickr.js');

var _flickr2 = _interopRequireDefault(_flickr);

var _config = require('../../config/config.json');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (router, sequelize) {
  router.route('/drawings').get(function (req, res) {
    _flickr2.default.then(function (flickr) {
      flickr.photosets.getPhotos({
        photoset_id: _config2.default.flickr.drawings,
        user_id: _config2.default.flickr.nsid,
        page: req.query.page,
        per_page: req.query.perPage,
        extras: ['url_o', 'url_n']
      }, function (err, result) {
        if (err) res.send(err);
        var images = result.photoset.photo.map(function (img) {
          return {
            src: img.url_o,
            thumbnail: img.url_n,
            text: img.title
          };
        });
        res.json({ images: images, count: result.photoset.total });
      });
    }).catch(function (err) {
      res.send('Can\'t connect to Flickr API: ' + err.message);
    });
  });
};
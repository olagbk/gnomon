'use strict';
import Flickr from '../flickr.js';
import config from '~/config/config.json';


module.exports = (router, sequelize) => {
  router.route('/drawings')

    .get((req, res) => {
      Flickr
        .then(flickr => {
          flickr.photosets.getPhotos(
            {
              photoset_id: config.flickr.drawings,
              user_id: config.flickr.nsid
            },
            (err, result) => (err) ? res.send(err) : res.json(result.photoset.photo)
          )
        })
        .catch(err => {
          res.send(`Can't connect to Flickr API: ${err.message}`)
        })
    });
};

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
              user_id: config.flickr.nsid,
              page: req.query.page,
              per_page: req.query.perPage,
              extras: ['url_o', 'url_n']
            },
            (err, result) => {
              if (err) res.send(err);
              const images = result.photoset.photo.map(img => {
                return {
                  src: img.url_o,
                  thumbnail: img.url_n,
                  text: img.title
                }
              });
              res.json({images: images, count: result.photoset.total})
            }
          )
        })
        .catch(err => {
          res.send(`Can't connect to Flickr API: ${err.message}`)
        })
    });
};



'use strict';
import Flickr from '../flickr.js';
import config from '~/config/config.json';


module.exports = (router, sequelize) => {
  router.route('/flickr')
    .get((req, res) => {

      Flickr
        .then(flickr => {
          flickr.photosets.getPhotos(
            {
              user_id: config.flickr.nsid,
              photoset_id: req.query.album,
              page: req.query.page,
              per_page: req.query.perPage,
              extras: ['url_o', 'url_n']
            },
            (err, result) => {
              if (err) return res.send(err);
              const images = result.photoset.photo.map(img => {
                return {
                  src: `https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}_b.jpg`,
                  url: img.url_o,
                  thumbnail: img.url_n,
                  text: img.title
                }
              });
              res.json({images: images, count: result.photoset.total})
            }
          )
        })
        .catch(err => {
          res.send(`Can't connect to Flickr API: ${err}`)
        })
    });
};



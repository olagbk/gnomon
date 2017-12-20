'use strict';
import Flickr from '../flickr.js';
import config from '~/config/config.json';


module.exports = (router, sequelize) => {
  router.route('/flickr')
    .get((req, res) => {

      Flickr
        .then(flickr => {
          if (flickr instanceof Error) throw new Error(flickr);
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
                  thumbnail: img.url_n,
                  text: img.title
                }
              });
              res.json({images: images, count: result.photoset.total})
            }
          )
        })
        .catch(e => res.status(500).send(e))
    });
};



'use strict';
import Flickr from '../flickr.js';
import config from '~/config/config.json';

export function getAlbum(f, req, res, conf) {
  return f
    .then(flickr => {

      if (flickr instanceof Error) throw flickr;
      return flickr.photosets.getPhotos({

          user_id: conf.flickr.nsid,
          photoset_id: req.query.album,
          page: req.query.page,
          per_page: req.query.perPage,
          extras: ['url_n']
        },
        (err, result) => {
          if (err) return res.status(404).send(err);
          const images = result.photoset.photo.map(img => {
            return {
              src: `https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}_b.jpg`,
              thumbnail: img.url_n,
              text: img.title
            }
          });
          res.json({
            images: images,
            count: result.photoset.total
          })
        }
      )
    })
    .catch(e => res.status(500).send(e))
}

export default (router, sequelize) => {
  router.route('/flickr').get((req, res) => getAlbum(Flickr, req, res, config));
};



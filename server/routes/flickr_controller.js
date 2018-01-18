'use strict';

import Flickr from '../services/flickr';

export default (router, sequelize) => {
  router.route('/flickr').get((req, res) => {

    Flickr.getAlbum(req.query)
      .then(data => res.json(data))
      .catch(err => res.status(err.status || 500).send(err));
  })
};



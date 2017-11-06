'use strict';

module.exports = (router, sequelize) => {
  router.route('/albums')

    .get((req, res) => {
      sequelize.models.albums.findAll()
        .then(data => {
          let response = {};
          data.forEach(album => response[album.dataValues.type] = album.dataValues.album_id);
          res.json(response);
        })
        .catch(err => res.send(err));
    });
};



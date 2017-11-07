'use strict';

module.exports = (router, sequelize) => {

  router.route('/albums')
    .get((req, res) => {
      sequelize.models.albums.findAll()
        .then(data => res.json(data))
        .catch(err => res.send(err))
    });
};



'use strict';

module.exports = (router, sequelize) => {

  router.route('/albums')
    .get((req, res) => {
      sequelize.models.albums.findAll()
        .then(data => res.json(data))
        .catch(err => res.send(err))
    });
  router.route('/albums/:type')
    .get((req, res) => {
    sequelize.models.albums.findAll({where: {type: req.params.type}})
      .then(data => res.json(data))
      .catch(err => res.send(err));
    })
};



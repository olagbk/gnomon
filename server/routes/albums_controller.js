'use strict';

export default (router, sequelize) => {

  router.route('/albums')
    .get((req, res) => {
      sequelize.models.albums.findAll()
        .then(data => res.json(data))
        .catch(err => res.send(err))
    });

  router.route('/albums/:type')
    .get((req, res) => {

      const type = req.params.type;
      const method = (type === 'photos')? 'findAll' : 'findOne';

      sequelize.models.albums[method]({where: {type: type}})
        .then(data => data? res.json(data) : res.status(404).send())
        .catch(err => res.send(err));

  })
};



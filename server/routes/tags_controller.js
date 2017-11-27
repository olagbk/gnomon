'use strict';

module.exports = (router, sequelize) => {

  router.route('/tags')
    .get((req, res) => {
      sequelize.models.tags.findAll()
        .then(data => res.json(data))
        .catch(err => res.send(err))
    });
};



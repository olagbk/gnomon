'use strict';

module.exports = function (router, sequelize) {

  router.route('/albums').get(function (req, res) {
    sequelize.models.albums.findAll().then(function (data) {
      return res.json(data);
    }).catch(function (err) {
      return res.send(err);
    });
  });
};
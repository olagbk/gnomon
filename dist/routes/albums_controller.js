'use strict';

module.exports = function (router, sequelize) {

  router.route('/albums').get(function (req, res) {
    sequelize.models.albums.findAll().then(function (data) {
      return res.json(data);
    }).catch(function (err) {
      return res.send(err);
    });
  });
  router.route('/albums/:type').get(function (req, res) {
    var type = req.params.type;
    var method = type === 'photos' ? 'findAll' : 'findOne';
    sequelize.models.albums[method]({ where: { type: type } }).then(function (data) {
      return res.json(data);
    }).catch(function (err) {
      return res.send(err);
    });
  });
};
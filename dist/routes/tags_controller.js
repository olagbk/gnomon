'use strict';

module.exports = function (router, sequelize) {

  router.route('/tags').get(function (req, res) {
    sequelize.models.tags.findAll().then(function (data) {
      return res.json(data);
    }).catch(function (err) {
      return res.send(err);
    });
  });
};
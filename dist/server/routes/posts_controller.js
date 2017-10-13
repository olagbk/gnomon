'use strict';

module.exports = function (router, sequelize) {
  router.route('/posts').post(function (req, res) {

    sequelize.models.posts.create({
      title: req.query.title,
      body: req.query.body
    }).then(function (post) {
      return res.json(post);
    }).catch(function (err) {
      return res.status(500).send(err);
    });
  }).get(function (req, res) {

    sequelize.models.posts.findAll().then(function (posts) {
      return res.json(posts);
    }).catch(function (err) {
      return res.status(500).send(err);
    });
  });
};
'use strict';

module.exports = function (router, sequelize) {
  router.route('/posts').post(function (req, res) {

    sequelize.models.posts.create({
      title: req.query.title,
      body: req.query.body
    }).then(function (post) {
      return res.status(201).json(post);
    }).catch(function (err) {

      if (err.constructor.name === 'ValidationError') res.status(422);

      res.send(err);
    });
  }).get(function (req, res) {
    var numWords = 150;
    sequelize.models.posts.findAll().then(function (posts) {
      return res.json(posts.map(function (post) {
        if (!post.body) return post;
        var words = post.body.split(" ");
        if (words.length <= numWords) return post;
        post.dataValues.cutoff = true;
        post.body = words.slice(0, numWords).join(" ");
        return post;
      }));
    }).catch(function (err) {
      return res.send(err);
    });
  });

  router.route('/blog/:id').get(function (req, res) {
    sequelize.models.posts.findById(req.params.id).then(function (post) {
      return res.json(post);
    }).catch(function (err) {
      return res.send(err);
    });
  }).put(function (req, res) {
    sequelize.models.posts.findById(req.params.id).then(function (post) {
      post.update(req.query).then(function (updatedPost) {
        return res.json(post);
      }).catch(function (err) {
        return res.send(err);
      });
    }).catch(function (err) {
      return res.send(err);
    });
  }).delete(function (req, res) {
    sequelize.models.posts.findById(req.params.id).then(function (post) {
      post.destroy().then(function () {
        return res.status(204).send();
      }).catch(function (err) {
        return res.send(err);
      });
    }).catch(function (err) {
      return res.send(err);
    });
  });
};
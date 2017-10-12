'use strict';

module.exports = (router, sequelize) => {
  router.route('/posts')

    .post((req, res) => {

      sequelize.models.posts.create({
        title: req.query.title,
        body: req.query.body
      })
        .then((post) => res.json(post))
        .catch((err) => res.status(500).send(err))
      })

    .get((req, res) => {

      sequelize.models.posts.findAll()
        .then((posts) => res.json(posts))
        .catch((err) => res.status(500).send(err));
    })
};

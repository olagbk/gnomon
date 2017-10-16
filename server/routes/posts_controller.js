'use strict';

module.exports = (router, sequelize) => {
  router.route('/posts')

    .post((req, res) => {

      sequelize.models.posts.create({
        title: req.query.title,
        body: req.query.body
      })
        .then(post => res.json(post))

        .catch(err => {

        if (err.constructor.name === 'ValidationError')
          res.status(422);

        res.send(err);
        })
      })

    .get((req, res) => {

      sequelize.models.posts.findAll()
        .then(posts => res.json(posts))
        .catch(err => res.send(err));
    })
};

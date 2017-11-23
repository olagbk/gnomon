'use strict';

module.exports = (router, sequelize) => {
  router.route('/posts')

    .post((req, res) => {

      sequelize.models.posts.create({
        title: req.query.title,
        body: req.query.body
      })
        .then(post => res.status(201).json(post))

        .catch(err => {

        if (err.constructor.name === 'ValidationError')
          res.status(422);

        res.send(err);
        })
      })

    .get((req, res) => {
      const numWords = 150;
      sequelize.models.posts.findAll()
        .then(posts => res.json(posts.map(post => {
          if (!post.body) return post;
          const words = post.body.split(" ");
          if (words.length <= numWords) return post;
          post.dataValues.cutoff = true;
          post.body = words.slice(0, numWords).join(" ");
          return post;
        })))
        .catch(err => res.send(err));
    });

  router.route('/blog/:id')
    .get((req, res) => {
    sequelize.models.posts.findById(req.params.id)
      .then(post => res.json(post))
      .catch(err => res.send(err));
    })
    .put((req, res) => {
      sequelize.models.posts.findById(req.params.id)
        .then(post => {
          post
            .update(req.query)
            .then(updatedPost => res.json(post))
            .catch(err => res.send(err))
        })
        .catch(err => res.send(err));

    })
    .delete((req, res) => {
      sequelize.models.posts.findById(req.params.id)
        .then(post => {
          post
            .destroy()
            .then(() => res.status(204).send())
            .catch(err => res.send(err))
        })
        .catch(err => res.send(err));
    })

};

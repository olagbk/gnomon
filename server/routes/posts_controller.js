'use strict';

module.exports = (router, sequelize) => {

  router.route('/posts')

    .post((req, res) => {

    sequelize.models.posts.create({
      title: req.query.title,
      body: req.query.body
    }).then(post => {

      const tags = req.query.tags || [];
      const promises = tags.map(tag => sequelize.models.tags.findCreateFind({where: {name: tag}}));

      Promise.all(promises).then(tags => {
        tags = tags.map(t => t[0]);
        post.setTags(tags).then(tags => res.status(201).json(post) )
        });
      })
      .catch(err => {
        if (err.constructor.name === 'ValidationError') res.status(422);
        res.send(err);
        })
      })

    .get((req, res) => {
      const opts = {};

      if (req.query.count) {
        opts.limit = req.query.count;
        opts.order = [['createdAt', 'DESC']];
      }
      if (req.query.tags) {
        opts.include = {
          model: sequelize.models.tags,
          attributes: ['name']
        }
      }
      sequelize.models.posts.findAll(opts)
        .then(posts => res.json(posts))
        .catch(err => res.send(err));
    });
  router.route('/posts/:id')
    .get((req, res) => {
      sequelize.models.posts.findById(req.params.id, {include: {model: sequelize.models.tags, attributes: []}})
        .then(post => res.json(post))
        .catch(err => res.send(err));
    })
    .put((req, res) => {
      sequelize.models.posts.findById(req.params.id)
        .then(post => {
          post
            .update(req.body)
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

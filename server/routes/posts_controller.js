'use strict';

export default (router, sequelize) => {

  router.route('/posts')

    .post((req, res) => {

    sequelize.models.posts.create({
      title: req.body.title,
      body: req.body.body
    }).then(post => {

      const reqTags = req.body.tags || [];
      const promises = reqTags.map(tag => sequelize.models.tags.findCreateFind({where: {name: tag}}));

      Promise.all(promises).then(tags => {
        const tagObjs = tags.map(t => t[0]);
        post.setTags(tagObjs).then(() => {
          res.status(201).json({post, tags})
        } )
        });
      })
      .catch(err => {
        if (err.constructor.name === 'ValidationError') res.status(422);
        res.send(err);
        })
      })

    .get((req, res) => {
      const opts = {};

      opts.include = {
        model: sequelize.models.tags,
        attributes: ['name']
      };
      if (req.query.count) {
        opts.limit = req.query.count;
        opts.order = [['createdAt', 'DESC']];
      }
      sequelize.models.posts.findAll(opts)
        .then(posts => res.json(posts))
        .catch(err => res.send(err));
    });
  router.route('/posts/:id')
    .get((req, res) => {
      sequelize.models.posts.findById(req.params.id, {include: {model: sequelize.models.tags}})
        .then(post => res.json(post))
        .catch(err => res.send(err));
    })
    .put((req, res) => {
      sequelize.models.posts.findById(req.params.id)
        .then(instance => {

          instance.update(req.body)
            .then(post => {

              if (!req.body.tags) return res.json({post});

              const promises = req.body.tags.map(tag => sequelize.models.tags.findCreateFind({where: {name: tag}}));

              Promise.all(promises)
                .then(tags => {

                const tagObjs = tags.map(t => t[0]);

                post.setTags(tagObjs).then(
                  () => res.json({post, tags}),
                  () => res.send(err)
                )
                })
                .catch(err => res.send(err));
            })
        })
        .catch(err => res.send(err))
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

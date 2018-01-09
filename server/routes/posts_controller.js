'use strict';

export default (router, sequelize) => {

  router.route('/posts')
    // POST request

    .post((req, res) => {
    sequelize.models.posts.create({
      title: req.body.title,
      body: req.body.body
    }).then(post => {

      const reqTags = req.body.tags || [];

      Promise.all(reqTags.map(tag =>
        sequelize.models.tags.findCreateFind({
          where: {
            name: tag
          }
        }))).then(tags => {

          post.setTags(tags.map(t => t[0])).then(() => {
            res.status(201).json({post, tags})
        })
      });
    })
      .catch(err => {
        const status = (err.constructor.name === 'ValidationError')? 422 : 500;
        res.status(status).send(err);
        })
      })
    // GET request

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
    // GET request

    .get((req, res) => {
      sequelize.models.posts.findById(req.params.id, {include: {model: sequelize.models.tags}})
        .then(post => res.json(post))
        .catch(err => res.send(err));
    })
    // PUT request

    .put((req, res) => {
      sequelize.models.posts.findById(req.params.id)
        .then(instance => {
          instance.update(req.body.post).then(post => {

            Promise.all(req.body.tags.map(tag => sequelize.models.tags.findCreateFind({where: {name: tag}})))
              .then(tags => {

              post.setTags(tags.map(t => t[0])).then(
                () => res.json({post, tags}),
                () => res.status(500).send(err)
              )})
              .catch(err => res(500).send(err));
          })
        })
        .catch(err => res.send(err))
    })
    // DELETE request

    .delete((req, res) => {
      sequelize.models.posts.findById(req.params.id)
        .then(post => post.destroy()
          .then(() => res.status(204).send())
          .catch(err => res.status(500).send(err)))
        .catch(err => res.status(500).send(err));
    })
};

'use strict';

import jwt from '../services/jwt';

export default (router, sequelize) => {

  //authentication middleware
  router.use('/posts*', (req, res, next) => {
    jwt.verify(req).then(next);
  });

  router.route('/posts')

    .post((req, res) => {  // POST request
      if (!req.decoded) {
        return res.status(401).append('WWW-Authenticate', 'Bearer token_type="JWT"').send();
      }
      // create instance
      sequelize.models.posts.create(req.body.post)
        .then(post => {
          // find or create tags
          req.body.tags = req.body.tags || [];
          const tags = Promise.all(

            req.body.tags.map(tag =>
              sequelize.models.tags.findCreateFind({
                where: { name: tag }
              })
            )
          );
          return Promise.all([post, tags])
        })
        // relate tags to post
        .then(([post, tags]) => post.setTags(tags.map(t => t[0])))
        .then(() => res.status(201).send())
        .catch(err => res.status((err.constructor.name === 'ValidationError')? 422 : 500).send(err))
    })
    .get((req, res) => { // GET request
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
        .catch(err => res.status(500).send(err));
    });

  router.route('/posts/:id')

    .get((req, res) => { // GET request
      sequelize.models.posts.findById(req.params.id, {
        include: {
          model: sequelize.models.tags
        }})
        .then(post => res.json(post))
        .catch(err => res.status(500).send(err));
    })
    .put((req, res) => { // PUT request
      if (!req.decoded) {
        return res.status(401).append('WWW-Authenticate', 'Bearer token_type="JWT"').send();
      }
      // find and update instance
      sequelize.models.posts.findById(req.params.id)
        .then(post => post.update(req.body.post))
        .then(post => {
          // find or create tags
          const tags = Promise.all(
            req.body.tags.map(tag =>
              sequelize.models.tags.findCreateFind({
                where: {name: tag}
              })
            )
          );
          return Promise.all([post, tags])
        })
        // relate tags to post
        .then(([post, tags]) => post.setTags(tags.map(t => t[0])))
        .then(() => res.status(200).send())
        .catch(err => res.status(500).send(err));
    })
    .delete((req, res) => { // DELETE request
      if (!req.decoded) {
        return res.status(401).append('WWW-Authenticate', 'Bearer token_type="JWT"').send();
      }
      sequelize.models.posts.findById(req.params.id)
        .then(post => post.destroy())
        .then(() => res.status(204).send())
        .catch(err => res.status(500).send(err))

    })
};

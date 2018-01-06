'use strict';

export default (router, sequelize) => {

  router.route('/tags')
    .get((req, res) => {
      sequelize.query('SELECT tags.name, COUNT("post_tags"."tagId") FROM tags LEFT JOIN "post_tags" ON tags.id = "post_tags"."tagId" GROUP BY tags.id')
        .then(data => res.json(data[0]))
        .catch(err => res.send(err))
    });
};



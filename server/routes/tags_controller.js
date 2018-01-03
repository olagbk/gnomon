'use strict';

module.exports = (router, sequelize) => {

  router.route('/tags')
    .get((req, res) => {
      sequelize.query('SELECT tags.name, COUNT("PostTags"."tagId") FROM tags LEFT JOIN "PostTags" ON tags.id = "PostTags"."tagId" GROUP BY tags.id')
        .then(data => res.json(data[0]))
        .catch(err => res.send(err))
    });
};



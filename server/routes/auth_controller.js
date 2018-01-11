'use strict';

export default (router, sequelize) => {

  router.route('/authenticate')
    .post((req, res) => {
      res.json({token: true});
    });
};



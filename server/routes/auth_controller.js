'use strict';
import jwt from '../services/jwt';

export default (router, sequelize) => {

  router.route('/authenticate')
    .post((req, res) => jwt.authenticate(req.body.password)
      .then(token => res.json({token: token }))
      .catch(err => res.status(err.status || 500).send(err)))
};



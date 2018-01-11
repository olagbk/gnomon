'use strict';
import md5 from 'md5';
import jwt from 'jsonwebtoken';
import app from '../index.js';
import config from '~/config/config.json';

export default (router, sequelize) => {

  router.route('/authenticate')
    .post((req, res) => {
      const password = md5(req.body.password);
      if (config.auth.password !== password) {
        res.status(401).send();
      } else {
        const payload = {};
        const token = jwt.sign(payload, app.get('JWTsecret'), {
          expiresIn: '24h'
        });
        res.json({
          token: token
        });
      }
    });
};



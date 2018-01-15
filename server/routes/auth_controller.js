'use strict';
import md5 from 'md5';
import JWT from 'jsonwebtoken';
import config from '~/config/config.json';

export function authenticate(jwt, req, res, conf) {

  const password = md5(req.body.password);
  if (conf.auth.password !== password) {
    res.status(401).send();
  } else {
    const payload = {};

    jwt.sign(payload, conf.auth.JWTsecret, {
      expiresIn: '24h'
    }, ((err, token) => {
      if (err) {
        res.status(500).send(err)
      } else {
        res.json({
          token: token
        });
      }
    }));
  }
}
export default (router, sequelize) => {

  router.route('/authenticate')
    .post((req, res) => authenticate(JWT, req, res, config));
};



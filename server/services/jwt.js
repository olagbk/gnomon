import JWT from 'jsonwebtoken';
import md5 from 'md5';
import config from '~/config/config.json';

export default {
  _api: JWT,
  _config: config,

  useAPI(api) {
    this._api = api
  },
  useConfig(conf) {
    this._config = conf;
  },
  authenticate(pwd) {

    return new Promise((resolve, reject) => {
      const password = md5(pwd);
      if (this._config.auth.password !== password) {
        reject({status: 401});
      } else {
        const payload = {};
        this._api.sign(payload, this._config.auth.JWTsecret, {
          expiresIn: '6h'
        }, ((err, token) => {
          if (err) {
            reject(err);
          } else {
            resolve(token);
          }
        }));
      }
    })
  },
  verify(req) {
    return new Promise(resolve => {
      if (!req.query.token) {
        return resolve();
      }
      this._api.verify(
        req.query.token,
        config.auth.JWTsecret,
        (err, decoded) => {

          if (decoded) {
            req.decoded = true;
          }
          resolve();
        })
    })
  }
};

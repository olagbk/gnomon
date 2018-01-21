'use strict';

import mailer from '../services/mailer';

export default (router, sequelize) => {

  router.route('/emails')
    .post((req, res) => {
      mailer.verifyCaptcha(req.body.captcha)
        .then(() => mailer.sendEmail(req.body.email))
        .then(() => res.json('sent'))
        .catch(err => res.status(err.status || 500).send(err.message || err));
    });
};



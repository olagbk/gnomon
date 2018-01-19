'use strict';

import mailer from '../services/mailer';

export default (router, sequelize) => {

  router.route('/emails')
    .post((req, res) => {
      mailer.sendEmail(req.body)
        .then(() => res.json('sent'))
        .catch(err => res.status(502).send(err));
    });
};



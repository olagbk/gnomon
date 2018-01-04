'use strict';
import nodemailer from 'nodemailer';
import config from '~/config/config.json';

export default (router, sequelize) => {

  router.route('/emails')
    .post((req, res) => {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: config.gmail.username,
          pass: config.gmail.password
        }
      });
      const mailOptions = {
        from: `"${req.body.name}" <${req.body.email}>`,
        replyTo: `"${req.body.name}" <${req.body.email}>`,
        to: 'rivvel@gmail.com',
        subject: 'Fan mail!',
        text: req.body.message
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          res.status(500).send(error);
        } else {
          res.json('sent');
        }
      });
    });
};



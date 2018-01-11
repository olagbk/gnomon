'use strict';
import md5 from 'md5';
import nodemailer from 'nodemailer';
import config from '~/config/config.json';

export function sendEmail(mailer, req, res, conf){
  const transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
      user: conf.gmail.username,
      pass: md5(conf.gmail.password)
    }
  });
  const mailOptions = {
    from: `"${req.body.name}" <${req.body.email}>`,
    replyTo: `"${req.body.name}" <${req.body.email}>`,
    to: conf.gmail.addressee,
    subject: `[GNOMON] ${req.body.subject}`,
    text: req.body.message
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.json('sent');
    }
  });
}
export default (router, sequelize) => {

  router.route('/emails')
    .post((req, res) => {
      sendEmail(nodemailer, req, res, config);
    });
};



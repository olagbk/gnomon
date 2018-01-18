import nodemailer from 'nodemailer';
import config from '~/config/config.json';

export default {
  _api: nodemailer,
  _config: config,

  useAPI(api) { this._api = api; },

  useConfig(conf) { this._config = conf; },

  sendEmail(data){
    return new Promise((resolve, reject) => {
      const transporter = this._api.createTransport({
        service: 'gmail',
        auth: {
          user: this._config.gmail.username,
          pass: this._config.gmail.password
        }
      });
      const mailOptions = {
        from: `"${data.name}" <${data.email}>`,
        replyTo: `"${data.name}" <${data.email}>`,
        to: this._config.gmail.addressee,
        subject: `[GNOMON] ${data.subject}`,
        text: data.message
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    })
  }
}

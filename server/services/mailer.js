import nodemailer from 'nodemailer';
import request from 'request';
import config from '~/config/config.json';

export default {
  _api: nodemailer,
  _config: config,

  useAPI(api) { this._api = api; },

  useConfig(conf) { this._config = conf; },

  getCaptchaResponse(captcha) {
    return new Promise(resolve => {
      const url = `https://www.google.com/recaptcha/api/siteverify?secret=${this._config.recaptcha.secretKey}&response=${captcha}`;
      request.post(url, {}, (error, response, body) => {
        resolve(JSON.parse(body));
      })
    })
  },

  verifyCaptcha(captcha) {
    return new Promise((resolve, reject) => {
      this.getCaptchaResponse(captcha).then(res => {
        if (res && res.success) {
          resolve();
        } else {
          const error = res['error-codes'].toString();
          const status = (error.includes("secret"))? 500 : 400;
          reject({status: status, message: error})
        }
      })
    })
  },

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
          reject({status: 502, message: error});
        } else {
          resolve();
        }
      });
    })
  }
}

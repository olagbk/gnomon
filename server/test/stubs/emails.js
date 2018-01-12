export function MockMailer() {
  this.error = false;
  this.sendMail = (opts, callback) => {
    callback(this.error, {});
  };
  this.createTransport = (opts) => {
    return {
      sendMail: this.sendMail
    }
  }
}

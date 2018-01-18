export default function JWT() {
  this.signError = false;
  this.verifyError = false;
  this.sign = (payload, secret, opts, callback) => {
    callback(this.signError, 'sometoken');
  };
  this.verify = (token, secret, callback) => {
    this.verifyError = token === 'invalidToken';
    callback(this.verifyError, !this.verifyError)
  }
}

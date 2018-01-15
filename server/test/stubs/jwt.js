export function JWT() {
  this.error = false;
  this.sign = (payload, secret, opts, callback) => {
    callback(this.error, 'sometoken');
  };

}

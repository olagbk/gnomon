export function Res() {
  this.send = (data) => {};
  this.json = (data) => {};
  this.status = function(code) { return this }
}

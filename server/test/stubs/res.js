export function Res() {
  this.send = (data) => {};
  this.json = (data) => {};
  this.setHeader = (header, value) => {};
  this.sendStatus = (code) => {};
  this.status = function(code) { return this };
}

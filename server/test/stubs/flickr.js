const result = {
  photoset: {
    total: 15,
    photo: [{
      "id": "id",
      "secret": "secret",
      "server": "server",
      "farm": 1,
      "title": "title",
      "url_n": "url_n"
    }, {
      "id": "9385843538",
      "secret": "f1d852d9c5",
      "server": "3679",
      "farm": 4,
      "title": "System zamknięty / Closed system (A3)",
      "url_n": "https://farm4.staticflickr.com/3679/9385843538_f1d852d9c5_n.jpg"
    }]
  }
};
export function MockFlickr() {
  this.albumError = null;
  this.authError = null;
  this.getPhotos = (options, callback) => {
    callback(this.albumError, result)
  };
  this.authenticate = (opts = {}) => {

    const response = this.authError ?
      this.authError
      : {
        photosets: {
          getPhotos: this.getPhotos
        }
      };
    return Promise.resolve(response);
  };
}

const result = {
  photoset: {
    photo: []
  }
};
export const mockFlickr = Promise.resolve({
  photosets: {
    getPhotos: (options, callback) => {
      callback(null, result)
    }}
});

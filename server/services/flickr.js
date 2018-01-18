import Flickr from 'flickrapi';
import config from '~/config/config.json';

export default {
  _api: null,
  _config: config,

  useAPI(api) {
    this._api = api;
  },
  useConfig(conf) {
    this._config = conf;
  },

  authenticate() {
    return new Promise((resolve, reject) => {
      if (this._api) return resolve(this._api);

      Flickr.tokenOnly(
        {
          api_key: this._config.flickr.key,
          secret: this._config.flickr.secret
        },
        (error, flickr) => {
          if (error) return reject(error);
          this.useAPI(flickr);
          resolve(flickr);
        });
    })
  },
  getAlbum(options) {
    return new Promise((resolve, reject) => {

      this.authenticate()
        .then(flickr => {
          flickr.photosets.getPhotos({

              user_id: this._config.flickr.nsid,
              photoset_id: options.album,
              page: options.page,
              per_page: options.perPage,
              extras: ['url_n']
            },
            (err, result) => {
              if (err) return reject({status: 404});
              const images = result.photoset.photo.map(img => {
                return {
                  src: `https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}_b.jpg`,
                  thumbnail: img.url_n,
                  text: img.title
                }
              });
              resolve({
                images: images,
                count: result.photoset.total
              });
            }
          )
        }).catch(err => reject(err));
    })
  }
}


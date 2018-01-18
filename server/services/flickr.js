import FlickrAPI from 'flickrapi';
import config from '~/config/config.json';

export default {
  _api: null,
  authenticate(){
    return new Promise(resolve => {

      FlickrAPI.tokenOnly(
        {
          api_key: config.flickr.key,
          secret: config.flickr.secret
        },
        (error, flickr) => {
          //this._api = error || flickr;
          resolve(error || flickr);
        });
    })
  }
}


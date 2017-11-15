import Flickr from 'flickrapi';
import config from '~/config/config.json';

export default new Promise(
  (resolve, reject) => {

  Flickr.tokenOnly(
    {
    api_key: config.flickr.key,
    secret: config.flickr.secret
    },
    (error, flickr) => {
      if (error) console.log(error);
      resolve(flickr);
  });
})

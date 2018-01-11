'use strict';

import albums from './albums_controller';
import emails from './emails_controller';
import flickr from './flickr_controller';
import posts from './posts_controller';
import tags from './tags_controller';
import auth from './auth_controller';

export default function(router, sequelize) {
  albums(router, sequelize);
  emails(router, sequelize);
  flickr(router, sequelize);
  posts(router, sequelize);
  tags(router, sequelize);
  auth(router, sequelize);
}

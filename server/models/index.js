'use strict';

import path from 'path';

export default (sequelize) => {

  sequelize.import(path.join(path.resolve(), '/dist/models/Album.js'));
  sequelize.import(path.join(path.resolve(), '/dist/models/Post.js'));
  sequelize.import(path.join(path.resolve(), '/dist/models/Tag.js'));
  sequelize.import(path.join(path.resolve(), '/dist/models/PostTag.js'));
};


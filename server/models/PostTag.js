'use strict';

import path from 'path';

export default (sequelize) => {

  const PostTags = sequelize.define('post_tags', {});

  const Post = sequelize.import(path.join(path.resolve(), '/dist/models/Post.js'));
  const Tag = sequelize.import(path.join(path.resolve(), '/dist/models/Tag.js'));


  Post.belongsToMany(Tag, { through: PostTags });
  Tag.belongsToMany(Post, { through: PostTags });

  return PostTags;
};


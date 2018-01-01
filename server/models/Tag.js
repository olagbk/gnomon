'use strict';

import Sequelize from 'sequelize';
import path from 'path';

module.exports = (sequelize) => {
  const Post = sequelize.import(path.join(path.resolve(), '/dist/models/Post.js'));
  const Tag = sequelize.define('tags', {

      name: {
        type: Sequelize.STRING,
        allowNull: false
      }
    },
    {
      timestamps: false
    });
  Tag.belongsToMany(Post, {through: 'PostTags'});
  Post.belongsToMany(Tag, {through: 'PostTags'});

  return Tag;
};


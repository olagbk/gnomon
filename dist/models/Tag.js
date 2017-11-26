'use strict';

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (sequelize) {
  var Post = sequelize.import(_path2.default.join(_path2.default.resolve(), '/dist/models/Post.js'));
  var Tag = sequelize.define('tags', {

    name: {
      type: _sequelize2.default.STRING,
      allowNull: false
    },
    count: {
      type: _sequelize2.default.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: false
  });
  Tag.belongsToMany(Post, { through: 'PostTags' });
  Post.belongsToMany(Tag, { through: 'PostTags' });

  return Tag;
};
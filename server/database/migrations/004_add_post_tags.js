'use strict';

export default {
  up: (queryInterface, Sequelize, done) => {

      queryInterface.createTable('PostTags', {
        postId: {
          allowNull: false,
          references: {
            model: 'posts',
            key: 'id'
          },
          type: Sequelize.INTEGER
        },
        tagId: {
          allowNull: false,
          references: {
            model: 'tags',
            key: 'id'
          },
          type: Sequelize.INTEGER
        },
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        }
      }).then(() => done())

  },
  down: (queryInterface, Sequelize, done) => {
    queryInterface.dropTable('PostTags', {}).then(() => done())
  }
};


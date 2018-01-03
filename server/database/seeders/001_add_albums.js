module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('albums', [
      {
        type: 'drawings',
        albumId: '72157634825451545'
      },
      {
        type: 'sketches',
        albumId: '72157658877200994'
      }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('albums', null, {});
  }
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('albums', [
      {
        type: 'drawings',
        album_id: '72157634825451545'
      },
      {
        type: 'sketches',
        album_id: '72157658877200994'
      }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('albums', null, {});
  }
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('albums', [
      {
        type: 'photos',
        name: 'mammalia',
        album_id: '72157644448784543',
        filename: 'mammalia.jpg'
      },
      {
        type: 'photos',
        name: 'insecta et invertebrata',
        album_id: '72157636520804406',
        filename: 'insecta.jpg'
      },
      {
        type: 'photos',
        name: 'weird / creepy / dead',
        album_id: '72157642924012913',
        filename: 'weird.jpg'
      },
      {
        type: 'photos',
        name: 'aves',
        album_id: '72157636520438644',
        filename: 'aves.jpg'
      },
      {
        type: 'photos',
        name: 'fungi',
        album_id: '72157636043996186',
        filename: 'fungi.jpg'
      },
      {
        type: 'photos',
        name: 'plantae',
        album_id: '72157636184097774',
        filename: 'plantae.jpg'
      },
      {
        type: 'photos',
        name: 'bits and pieces',
        album_id: '72157635849221503',
        filename: 'bits.jpg'
      },
      {
        type: 'photos',
        name: 'reptilia et amphibia',
        album_id: '72157642919170795',
        filename: 'reptilia.jpg'
      },], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('albums', null, {});
  }
};

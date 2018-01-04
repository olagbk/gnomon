'use strict';

import chaiHttp from 'chai-http';
import server from '~/dist/index';
import sequelize from '~/dist/database/sequelize';
import defineModels from '~/dist/models/index';

import '../migrations.js';

import { fetchAlbum } from '~/dist/routes/flickr_controller';
const chai = require('chai').use(chaiHttp);
const models = defineModels(sequelize);

describe.only('/Flickr test', () => {

  it('should test something', () => {
    (2).should.equal(2);
  });
});

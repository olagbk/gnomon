'use strict';
var fs = require('fs');
var q = require('q');
var sequelize = require('./database/sequelize');

module.exports = function(router){
  var deferred = q.defer();

  require('./models.js')().then(function(models){
    fs.readdir('server/routes', (err, files)=>{
      for (let file of files){
        require(`./routes/${file}`)(router, models, sequelize);
      }
      deferred.resolve();
    });
  });
  return deferred.promise;
};

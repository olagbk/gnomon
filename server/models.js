'use strict';

var q = require('q');
var fs = require('fs');
var sequelize = require('./database/sequelize');

module.exports = function(){
  var deferred = q.defer();
  var models = {};
  fs.readdir('server/models', (err, files)=>{
    for (let file of files){
        models[file.replace('.js', '')] = require(`./models/${file}`)(sequelize)
    }
    deferred.resolve(models);
  });

  return deferred.promise;
};

'use strict';

var path = require('path');
var gulp = require('gulp');
var q = require('q');
var tap = require('gulp-tap');

var models = {};


module.exports = function(sequelize){
  var deferred = q.defer();

  gulp.src('./server/models/*.js')
    .pipe(tap(function(file){
      var model_name = path.basename(file.path).replace('.js', '');
      if(model_name === 'index')
        return;

      models[model_name] = require(file.path)(sequelize);
    })).on('finish', function(){
      deferred.resolve(models);
  });

  return deferred.promise;
};

'use strict';

var path = require('path');
var gulp = require('gulp');
var q = require('q');
var tap = require('gulp-tap');

module.exports = function(router, models, sequelize){
  var deferred = q.defer();

  gulp.src('./server/routes/*.js')
    .pipe(tap(function(file){
      require(file.path)(router, models, sequelize);
    })).on('finish', function(){
    deferred.resolve(models);
  });

  return deferred.promise;
};

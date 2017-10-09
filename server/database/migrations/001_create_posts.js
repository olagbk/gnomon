'use strict';

var q = require('q');

module.exports = {
  up: function(sequelize, models){
    var deferred = q.defer();

    //Add schemas
    sequelize.models.posts.sync().then(function() {
      deferred.resolve();
    });
    return deferred.promise;


  }
};


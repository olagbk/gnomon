'use strict';
var q = require('q');

module.exports = {
  up: function(sequelize){
    var deferred = q.defer();
    sequelize.models.posts.create({ title: "I'm a post!", body: "I came from the database!" }).then(() => {
         deferred.resolve();
    });
    return deferred.promise;
  }
};

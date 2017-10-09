const gulp = require('gulp');
const gls = require('gulp-live-server');
const q = require('q');
const Umzug = require('umzug');

gulp.task('server', ()=>{
  var server = gls.new('./server/index.js');
  server.start();
  // watch('./server/**/*.js')
  //     .on('change', (ev)=>{
  //       server.start();
  //       console.log('server restarted');
  //     })
  gulp.watch('./server/**/*.js', () => {
    server.start();
    console.log('server restarted');
  });
});
gulp.task('default', ['server']);

gulp.task('umzug',  function(){
  var deferred = q.defer();
  var sequelize = require('./server/database/sequelize');

  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });

  require('./server/models.js')(sequelize).then(function(models){
    try {
      var umzug = new Umzug({
        storage: 'sequelize',
        storageOptions: {
          sequelize: sequelize
        },
        migrations: {
          params: [
            sequelize, models
          ],
          path: './server/database/migrations'
        }
      });
    }
    catch (err){
      console.log(err);
    }

    try { umzug.up().then(deferred.resolve); }
    catch (err){
      console.log(err);
    }
  });

  return deferred.promise;
});

import gulp from 'gulp';
import gls from 'gulp-live-server';
import Umzug from 'umzug';

gulp.task('default', ['server']);

gulp.task('server', () => {
  const server = gls.new('./server/index.js');
  server.start();
  gulp.watch('./server/**/*.js', () => server.start() );
});

gulp.task('umzug', () => {
  const sequelize = require('./server/database/sequelize');
  const migrations = new Umzug({
    storage: 'sequelize',
    storageOptions: {
      sequelize: sequelize
    },
    migrations: {
      params: [
        sequelize
      ],
      path: './server/database/migrations'
    }
  });
  return migrations.up()
});

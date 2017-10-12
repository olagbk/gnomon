import babel from 'gulp-babel';
import del from 'del';
import gls from 'gulp-live-server';
import gulp from 'gulp';
import Umzug from 'umzug';

const server = gls.new('./dist/server/index.js');

gulp.task('default', ['watch']);

gulp.task('watch', ['server'], () => {
  gulp.watch('./server/**/*.js', ['server']);
});
gulp.task('server', ['transpile'], () => {
  server.start();
});

gulp.task('transpile', () => {
  return new Promise((resolve) => {
    del(['dist/server/**', '!dist/server']).then(
      gulp.src('server/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist/server'))
        .on('end', resolve)
    );
  });
});

gulp.task('umzug', ['transpile'], () => {
  const sequelize = require('./dist/server/database/sequelize');
  const migrations = new Umzug({
    storage: 'sequelize',
    storageOptions: {
      sequelize: sequelize
    },
    migrations: {
      params: [
        sequelize
      ],
      path: './dist/server/database/migrations'
    }
  });
  return migrations.up()
});

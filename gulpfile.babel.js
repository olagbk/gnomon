import babel from 'gulp-babel';
import del from 'del';
import gls from 'gulp-live-server';
import gulp from 'gulp';

const exec = require('child_process').exec;

const server = gls.new('./dist/index.js');

gulp.task('default', ['watch']);

gulp.task('watch', ['server'], () => {
  gulp.watch(['./src/**/*.ts', './src/**/*.html', './src/**/*.scss'], ['ng-build']);
  gulp.watch('./server/**/*.js', ['restart-server']);
});

gulp.task('restart-server', ['transpile'], () => {
  server.start();
});

gulp.task('server', ['kill', 'build'], () => {
  server.start();
});

gulp.task('kill', cb => {
  exec('kill -9 `lsof -t -i:3000`; kill -9 `lsof -t -i:35729`', cb);
});

gulp.task('clean', () => {
  return del(['dist/*', '!dist/public/**']);
});

gulp.task('transpile', ['clean'], () => {
  return new Promise((resolve) => {
    gulp.src('server/**/*.js')
      .pipe(babel())
      .pipe(gulp.dest('dist'))
      .on('end', resolve)
  });
});

gulp.task('build', ['transpile', 'ng-build']);

gulp.task('ng-build', cb => {
  exec('ng build -sm=false', cb)
});


import babel from 'gulp-babel';
import del from 'del';
import gls from 'gulp-live-server';
import gulp from 'gulp';

const server = gls.new('./dist/index.js');

gulp.task('default', ['watch']);

gulp.task('watch', ['server'], () => {
  gulp.watch('./server/**/*.js', ['server']);
});
gulp.task('server', ['transpile'], () => {
  server.start();
});

gulp.task('transpile', () => {
  return new Promise((resolve) => {
    del(['dist/*.js', 'dist/**/*.js', '!dist/public']).then(
      gulp.src('server/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'))
        .on('end', resolve)
    );
  });
});


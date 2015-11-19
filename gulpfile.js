var gulp = require('gulp');
var browserSync = require('browser-sync');

paths = {
  app: ['**/*.html', '**/*.js'],
};

gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });
  gulp.watch(paths.app, browserSync.reload);
});

gulp.task('default', ['serve']);

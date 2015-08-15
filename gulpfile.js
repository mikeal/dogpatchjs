var gulp = require('gulp');

var postcss = require('gulp-postcss');

var paths = {
  css: './*.css'
};

gulp.task('css', function () {
  return gulp.src(paths.css)
    .pipe(postcss([
      require('autoprefixer-core'),
      require('postcss-custom-properties'),
      require('csswring'),
    ]))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
  gulp.watch(paths.css, ['css']);
});

gulp.task('default', ['watch', 'css']);

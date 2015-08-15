var gulp = require('gulp');

var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var csswring = require('csswring');

var paths = {
  css: './*.css'
};

gulp.task('css', function () {
  return gulp.src(paths.css)
    .pipe(postcss([autoprefixer(), csswring]))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
  gulp.watch(paths.css, ['css']);
});

gulp.task('default', ['watch', 'css']);

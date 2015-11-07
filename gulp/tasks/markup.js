var gulp   = require('gulp');
var config = require('../config.js').markup;

gulp.task('markup', function() {
  gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});

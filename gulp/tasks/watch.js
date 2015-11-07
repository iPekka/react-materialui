var gulp   = require('gulp');
var config = require('../config.js');

gulp.task('watch', ['browserSync'], function() {
  gulp.watch(config.browserify.entries, ['browserify']);
  gulp.watch(config.markup.src, ['markup']);
});

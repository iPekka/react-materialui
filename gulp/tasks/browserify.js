var gulp = require('gulp');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var config = require('../config.js');
var clc = require('cli-color');

gulp.task('browserify', function(){
  gulp.src(config.browserify.entries)
    .pipe(browserify({transform:'reactify'}))
    .on('error', function(err){
      console.log(clc.red(err.name + ":") + " " + err.message);
    })
    .pipe(concat(config.browserify.outputName))
    .pipe(uglify())
    .pipe(gulp.dest(config.browserify.dest))
})

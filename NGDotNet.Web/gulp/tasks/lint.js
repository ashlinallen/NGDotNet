'use strict';

var gulp    = require('gulp'),
    config  = require('../config'),
    plumber = require('gulp-plumber'),
    jshint  = require('gulp-jshint');

gulp.task('lint', function() {
    
    return gulp
            .src([config.scripts.src, '!app/js/templates.js'])
            .pipe(plumber())
            .pipe(jshint())
            .pipe(jshint.reporter('jshint-stylish'));
    
});
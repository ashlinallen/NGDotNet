'use strict';

var gulp = require('gulp'),
    config = require('../config'),
    plumber = require('gulp-plumber'),
    jshint = require('gulp-jshint'),
    jscs = require('gulp-jscs'),
    stylish = require('gulp-jscs-stylish');

gulp.task('lint', function () {

    return gulp
            .src([config.scripts.src, '!app/js/templates.js'])
            .pipe(plumber())
		    .pipe(jshint())
		    .pipe(jscs())
		    .pipe(stylish.combineWithHintResults())
            .pipe(jshint.reporter('jshint-stylish'));

});
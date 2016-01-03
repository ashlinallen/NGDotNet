'use strict';

var gulp    = require('gulp'),
    config  = require('../config'),
    plugins = require('gulp-load-plugins')();

gulp.task('lint-scripts', function () {

    return gulp
            .src([config.scripts.src, '!app/js/templates.js'])
            .pipe(plugins.plumber())
            .pipe(plugins.jshint())
            .pipe(plugins.jscs())
            .pipe(plugins.jscsStylish.combineWithHintResults())
            .pipe(plugins.jshint.reporter('jshint-stylish'));

});
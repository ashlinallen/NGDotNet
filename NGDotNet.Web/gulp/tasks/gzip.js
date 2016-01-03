'use strict';

var gulp    = require('gulp'),
    config  = require('../config'),
    plugins = require('gulp-load-plugins')();

gulp.task('gzip', function() {

    return gulp
            .src(config.gzip.src)
            .pipe(plugins.plumber())
            .pipe(plugins.gzip(config.gzip.options))
            .pipe(gulp.dest(config.gzip.dest));

});

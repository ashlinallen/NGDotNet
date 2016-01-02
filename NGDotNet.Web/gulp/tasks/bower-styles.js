'use strict';

var gulp        = require('gulp'),
    config      = require('../config'),
    plumber     = require('gulp-plumber'),
    concat      = require('gulp-concat'),
    bower       = require('main-bower-files'),
    browserSync = require('browser-sync'),
    using       = require('gulp-using');

gulp.task('bower-styles', function () {

    return gulp
            .src(bower('**/*.css'))
            .pipe(plumber())
            .pipe(concat(config.styles.vendorDestFilename))
            .pipe(gulp.dest(config.styles.dest))
            .pipe(browserSync.reload({ stream: true }));

});
'use strict';

var gulp        = require('gulp'),
    config      = require('../config'),
    plugins     = require('gulp-load-plugins')(),
    bower       = require('main-bower-files'),
    browserSync = require('browser-sync');

gulp.task('bower-styles', function () {

    return gulp
            .src(bower('**/*.css'))
            .pipe(plugins.plumber())
            .pipe(plugins.concat(config.styles.vendorDestFilename))
            .pipe(gulp.dest(config.styles.dest))
            .pipe(browserSync.reload({ stream: true }));

});
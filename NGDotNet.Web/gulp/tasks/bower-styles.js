'use strict';

var gulp         = require('gulp'),
    config       = require('../config'),
    concat       = require('gulp-concat'),
    handleErrors = require('../util/handleErrors'),
    bower        = require('main-bower-files'),
    browserSync  = require('browser-sync'),
    using        = require('gulp-using');

gulp.task('bower-styles', function() {

    return gulp.src(bower('**/*.css'))
        .pipe(concat('vendor.css'))
        .on('error', handleErrors)
        .pipe(gulp.dest(config.styles.dest))
        .pipe(browserSync.reload({ stream: true }));

})
'use strict';

var gulp         = require('gulp'),
    config       = require('../config'),
    gzip         = require('gulp-gzip');

gulp.task('gzip', function() {

    return gulp
            .src(config.gzip.src)
            .pipe(plumber())
            .pipe(gzip(config.gzip.options))
            .pipe(gulp.dest(config.gzip.dest));

});

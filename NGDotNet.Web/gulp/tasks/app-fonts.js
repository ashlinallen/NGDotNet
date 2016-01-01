'use strict';

var gulp        = require('gulp'),
    config      = require('../config'),
    changed     = require('gulp-changed'),
    browserSync = require('browser-sync');

gulp.task('app-fonts', function() {

    return gulp.src(config.fonts.src)
        .pipe(changed(config.fonts.dest)) // Ignore unchanged files
        .pipe(gulp.dest(config.fonts.dest))
        .pipe(browserSync.reload({ stream: true, once: true }));

});

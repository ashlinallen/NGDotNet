'use strict';

var gulp        = require('gulp'),
    config      = require('../config'),
    plugins     = require('gulp-load-plugins')(),
    browserSync = require('browser-sync');

gulp.task('app-fonts', function() {

    return gulp
            .src(config.fonts.src)
            .pipe(plugins.plumber())
            .pipe(plugins.changed(config.fonts.dest)) // Ignore unchanged files
            .pipe(gulp.dest(config.fonts.dest))
            .pipe(browserSync.reload({ stream: true, once: true }));

});

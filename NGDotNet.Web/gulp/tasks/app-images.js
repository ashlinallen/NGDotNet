'use strict';

var gulp        = require('gulp'),
    config      = require('../config'),
    plumber     = require('gulp-plumber'),
    changed     = require('gulp-changed'),
    gulpif      = require('gulp-if'),
    imagemin    = require('gulp-imagemin'),
    browserSync = require('browser-sync');

gulp.task('app-images', function() {

    // Put our favicon.ico in the dist folder
    gulp.src(['app/assets/Images/favicon.ico',
              'app/assets/Images/favicon_large.ico'])
        .pipe(gulp.dest('./'));

    return gulp
            .src(config.images.src)
            .pipe(plumber())
            .pipe(changed(config.images.dest)) // Ignore unchanged files
            .pipe(gulpif(global.isProd, imagemin())) // Optimize
            .pipe(gulp.dest(config.images.dest))
            .pipe(browserSync.reload({ stream: true, once: true }));

});
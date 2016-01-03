'use strict';

var gulp        = require('gulp'),
    config      = require('../config'),
    plugins     = require('gulp-load-plugins')(),
    browserSync = require('browser-sync');

gulp.task('app-images', function() {

    // Put our favicon.ico in the dist folder
    gulp.src(['app/assets/Images/favicon.ico',
              'app/assets/Images/favicon_large.ico'])
        .pipe(gulp.dest('./'));

    return gulp
            .src(config.images.src)
            .pipe(plugins.plumber())
            .pipe(plugins.changed(config.images.dest)) // Ignore unchanged files
            .pipe(plugins.if(global.isProd, plugins.imagemin())) // Optimize
            .pipe(gulp.dest(config.images.dest))
            .pipe(browserSync.reload({ stream: true, once: true }));

});
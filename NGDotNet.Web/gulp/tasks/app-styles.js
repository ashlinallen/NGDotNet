'use strict';

var gulp        = require('gulp'),
    config      = require('../config'),
    plugins     = require('gulp-load-plugins')(),
    browserSync = require('browser-sync');

gulp.task('app-styles', function () {

    return gulp
            .src(config.styles.src)
            .pipe(plugins.plumber())
            .pipe(plugins.sass({
                sourceComments: global.isProd ? 'none' : 'map',
                sourceMap: 'sass',
                outputStyle: global.isProd ? 'compressed' : 'nested'
            }))
            .pipe(plugins.autoprefixer(config.autoPrefixer.options))
            .pipe(gulp.dest(config.styles.dest))
            .pipe(browserSync.reload({ stream: true }));

});
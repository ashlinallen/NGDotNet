'use strict';

var gulp         = require('gulp'),
    config       = require('../config'),
    plumber      = require('gulp-plumber'),
    sass         = require('gulp-sass'),
    browserSync  = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('app-styles', function () {

    return gulp
            .src(config.styles.src)
            .pipe(plumber())
            .pipe(sass({
                sourceComments: global.isProd ? 'none' : 'map',
                sourceMap: 'sass',
                outputStyle: global.isProd ? 'compressed' : 'nested'
            }))
            .pipe(autoprefixer(config.autoPrefixer.options))
            .pipe(gulp.dest(config.styles.dest))
            .pipe(browserSync.reload({ stream: true }));

});
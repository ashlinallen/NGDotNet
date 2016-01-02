'use strict';

var gulp    = require('gulp'),
    config  = require('../config'),
    plumber = require('gulp-plumber'),
    changed = require('gulp-changed');

gulp.task('bower-fonts', function() {

    return gulp
            .src(config.fonts.bowerFonts)
            .pipe(plumber())
            .pipe(changed(config.fonts.dest))
            .pipe(gulp.dest(config.fonts.dest));

});
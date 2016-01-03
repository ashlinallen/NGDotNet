'use strict';

var gulp    = require('gulp'),
    config  = require('../config'),
    plugins = require('gulp-load-plugins')();

gulp.task('bower-fonts', function() {

    return gulp
            .src(config.fonts.bowerFonts)
            .pipe(plugins.plumber())
            .pipe(plugins.changed(config.fonts.dest))
            .pipe(gulp.dest(config.fonts.dest));

});
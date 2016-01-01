'use strict';

var gulp        = require('gulp'),
    config      = require('../config'),
    changed     = require('gulp-changed');

gulp.task('bower-fonts', function() {

    return gulp.src(config.fonts.bowerFonts)
        .pipe(changed(config.fonts.dest))
        .pipe(gulp.dest(config.fonts.dest));

});
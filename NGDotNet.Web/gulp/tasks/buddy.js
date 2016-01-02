'use strict';

var gulp    = require('gulp'),
    config  = require('../config'),
    plumber = require('gulp-plumber'),
    buddyjs = require('gulp-buddy.js');

gulp.task('buddy', function() {
    
    return gulp
            .src([config.scripts.src, '!app/js/templates.js'])
            .pipe(plumber())
            .pipe(buddyjs({
                reporter: 'detailed'
            }));
    
});
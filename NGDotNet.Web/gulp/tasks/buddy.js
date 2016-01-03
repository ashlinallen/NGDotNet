'use strict';

var gulp    = require('gulp'),
    config  = require('../config'),
    buddyjs = require('gulp-buddy.js'),
    plugins = require('gulp-load-plugins')();

gulp.task('buddy', function() {
    
    return gulp
            .src([config.scripts.src, '!app/js/templates.js'])
            .pipe(plugins.plumber())
            .pipe(buddyjs({
                reporter: 'simple'
            }));
    
});
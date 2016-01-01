'use strict';

var gulp        = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('dev', ['clean'], function() {

    global.isProd = false;

    return runSequence(['bower-styles', 'bower-fonts', 'bower-scripts', 'app-styles', 'app-fonts', 'app-images', 'app-views'], 'app-scripts', 'watch');

});
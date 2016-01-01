'use strict';

var gulp        = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('prod', ['clean'], function() {

    global.isProd = true;

    return runSequence(['bower-styles', 'bower-fonts', 'bower-scripts', 'app-styles', 'app-fonts', 'app-images', 'app-views'], 'app-scripts', 'gzip');

});

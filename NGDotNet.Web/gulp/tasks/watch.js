'use strict';

var gulp        = require('gulp'),
    config      = require('../config'),
    runSequence = require('run-sequence');

gulp.task('watch', function() {

    function watchCb() {
        // Scripts are automatically watched and rebundled by Watchify inside Browserify task
        gulp.watch(config.scripts.src, ['lint', 'buddy']);
        gulp.watch(config.styles.src,  ['app-styles']);
        gulp.watch(config.images.src,  ['app-images']);
        gulp.watch(config.fonts.src,   ['app-fonts']);
        gulp.watch(config.views.watch, ['app-views']);
    }

    return runSequence('browserSync', watchCb);
    
});
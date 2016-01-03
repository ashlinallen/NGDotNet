'use strict';

var gulp    = require('gulp'),
    config  = require('../config'),
    plugins = require('gulp-load-plugins')();

// Views task
gulp.task('app-views', function() {

    // Put our index.html in the dist folder
    gulp.src('app/index.html')
        .pipe(gulp.dest('./'));

    // Process any other view files from app/views
    return gulp
            .src(config.views.src)
            .pipe(plugins.plumber())
            .pipe(plugins.angularTemplatecache({
                standalone: true,
                moduleSystem: 'Browserify'
            }))
            .pipe(plugins.htmlclean())
            .pipe(gulp.dest(config.views.dest));

});
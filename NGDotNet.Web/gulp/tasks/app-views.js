'use strict';

var gulp          = require('gulp'),
    config        = require('../config'),
    templateCache = require('gulp-angular-templatecache'),
    htmlclean     = require('gulp-htmlclean');

// Views task
gulp.task('app-views', function() {

    // Put our index.html in the dist folder
    gulp.src('app/index.html')
        .pipe(gulp.dest('./'));

    // Process any other view files from app/views
    return gulp.src(config.views.src)
        .pipe(templateCache({
            standalone: true,
            moduleSystem: 'Browserify'
        }))
        .pipe(htmlclean())
        .pipe(gulp.dest(config.views.dest));

});
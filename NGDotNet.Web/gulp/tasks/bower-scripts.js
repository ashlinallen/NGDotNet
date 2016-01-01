'use strict';

var gulp         = require('gulp'),
    config       = require('../config'),
    helpers      = require('../helpers'),
    gulpif       = require('gulp-if'),
    gutil        = require('gulp-util'),
    streamify    = require('gulp-streamify'),
    uglify       = require('gulp-uglify'),
    source       = require('vinyl-source-stream'),
    browserify   = require('browserify'),
    browserSync  = require('browser-sync'),
    fileExists   = require('file-exists'),
    source       = require('vinyl-source-stream'),
    bowerResolve = require('bower-resolve'),
    handleErrors = require('../util/handleErrors');

//process.env.BROWSERIFYSHIM_DIAGNOSTICS=1

gulp.task('bower-scripts', function() {
    // this task will go through ./bower.json and
    // uses bower-resolve to resolve its full path.
    // the full path will then be added to the bundle using require()

    var bundler = browserify({
        // generate source maps in non-production environment
        debug: !global.isProd
    });

    // get all bower components ids and use 'bower-resolve' to resolve
    // the ids to their full path, which we need for require()
    helpers.getBowerPackageIds().forEach(function(id) {
        var resolvedPath = bowerResolve.fastReadSync(id);
        
        if (fileExists(resolvedPath)) {
            bundler.require(resolvedPath, {
                // exposes the package id, so that we can require() from our code.
                // for eg:
                // require('./vendor/angular/angular.js', {expose: 'angular'}) enables require('angular');
                // for more information: https://github.com/substack/node-browserify#brequirefile-opts
                expose: id
            });
        }
    });
    
    //bundler.transform('browserify-shim', {
    //    global: true
    //});

    var stream = bundler.bundle();
    var createSourcemap = global.isProd && config.browserify.sourcemap;

    return stream.on('error', handleErrors)
        .pipe(source('vendor.js'))
        .pipe(gulpif(global.isProd, streamify(uglify({
            compress: { drop_console: true }
        }))))
        .pipe(gulp.dest(config.scripts.dest));
});
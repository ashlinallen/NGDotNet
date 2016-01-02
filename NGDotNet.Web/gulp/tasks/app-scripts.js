'use strict';

var gulp        = require('gulp'),
    config      = require('../config'),
    plumber     = require('gulp-plumber'),
    helpers     = require('../util/helpers'),
    gulpif      = require('gulp-if'),
    gutil       = require('gulp-util'),
    sourcemaps  = require('gulp-sourcemaps'),
    streamify   = require('gulp-streamify'),
    uglify      = require('gulp-uglify'),
    source      = require('vinyl-source-stream'),
    buffer      = require('vinyl-buffer'),
    watchify    = require('watchify'),
    browserify  = require('browserify'),
    browserSync = require('browser-sync');

// Based on: http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
function buildScript(file) {

    var bundler = browserify({
        entries: config.browserify.entries,
        debug: !global.isProd,
        cache: {},
        packageCache: {},
        fullPaths: false
    }, watchify.args);

    if ( !global.isProd ) {
        bundler = watchify(bundler);
        bundler.on('update', function() {
            rebundle();
        });
    }
    
    var transforms = [
        'browserify-ngannotate',
        'brfs',
        'bulkify',
        'strictify'
    ];

    helpers.getBowerPackageIds().forEach(function(lib) {
        bundler.external(lib);
    });
    
    helpers.getNPMPackageIds().forEach(function(id) {
        bundler.external(id);
    });
    
    transforms.forEach(function(transform) {
        bundler.transform(transform);
    }); 

    function rebundle() {
        var stream = bundler.bundle();
        var createSourcemap = global.isProd && config.browserify.sourcemap;

        gutil.log('Rebundle app...');

        return stream
                .pipe(plumber())
                .pipe(source(file))
                .pipe(gulpif(createSourcemap, buffer()))
                .pipe(gulpif(createSourcemap, sourcemaps.init()))
                .pipe(gulpif(global.isProd, streamify(uglify({
                    compress: { drop_console: true }
                }))))
                .pipe(gulpif(createSourcemap, sourcemaps.write('./')))
                .pipe(gulp.dest(config.scripts.dest))
                .pipe(browserSync.reload({ stream: true, once: true }));
    }

    return rebundle();

}

gulp.task('app-scripts', function() {

    return buildScript(config.browserify.destFilename);

});

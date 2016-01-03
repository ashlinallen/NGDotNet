'use strict';

var gulp        = require('gulp'),
    config      = require('../config'),
    plugins     = require('gulp-load-plugins')(),
    helpers     = require('../util/helpers'),
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

        plugins.util.log('Rebundle app...');

        return stream
                .pipe(plugins.plumber())
                .pipe(source(file))
                .pipe(plugins.if(createSourcemap, buffer()))
                .pipe(plugins.if(createSourcemap, plugins.sourcemaps.init()))
                .pipe(plugins.if(global.isProd, plugins.streamify(plugins.uglify({
                    compress: { drop_console: true }
                }))))
                .pipe(plugins.if(createSourcemap, plugins.sourcemaps.write('./')))
                .pipe(gulp.dest(config.scripts.dest))
                .pipe(browserSync.reload({ stream: true, once: true }));
    }

    return rebundle();

}

gulp.task('app-scripts', function() {

    return buildScript(config.browserify.destFilename);

});

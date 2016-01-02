'use strict';

var gulp        = require('gulp'),
    config      = require('../config'),
    browserSync = require('browser-sync');

gulp.task('browserSync', function() {

    return browserSync({
        proxy: config.browserSync.proxyServer,
        port: config.browserSync.browserPort,
        ui: {
            port: config.browserSync.UIPort
        },
        logPrefix: "BrowserSync",
        browser: config.browserSync.debugBrowsers,
        notify: true
    });

});
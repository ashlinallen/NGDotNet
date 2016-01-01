'use strict';

var gulp        = require('gulp'),
    config      = require('../config'),
    browserSync = require('browser-sync');

gulp.task('browserSync', function() {

    return browserSync({
        proxy: 'ngdotnet.local',
        port: config.browserPort,
        ui: {
            port: config.UIPort
        },
        logPrefix: "BrowserSync",
        browser: ["google chrome"],
        notify: true
    });

});

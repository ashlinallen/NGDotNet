'use strict';

var gulp   = require('gulp'),
    config = require('../config'),
    del    = require('del');

gulp.task('clean', function(cb) {

    return del([config.dist.root], cb);

});

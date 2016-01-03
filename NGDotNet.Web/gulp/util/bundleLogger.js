'use strict';

/* bundleLogger
 * ------------
 * Provides gulp style logs to the bundle method in browserify.js
 */

var plugins      = require('gulp-load-plugins')(),
    prettyHrtime = require('pretty-hrtime'),
    startTime;

module.exports = {

    start: function() {
        startTime = process.hrtime();
        plugins.util.log('Running', plugins.util.colors.green('\'bundle\'') + '...');
    },
    end: function() {
        var taskTime = process.hrtime(startTime);
        var prettyTime = prettyHrtime(taskTime);
        plugins.util.log('Finished', plugins.util.colors.green('\'bundle\''), 'in', plugins.util.colors.magenta(prettyTime));
    }

};
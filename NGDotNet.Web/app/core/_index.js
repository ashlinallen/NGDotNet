"use strict";

var bulk = require('bulk-require');

var coreModule = angular.module('app.core', [
    /*
     * Angular modules
     */
    'ngAnimate', 'ngRoute', 'ngSanitize',
    /*
     * Our reusable cross app code modules
     */
    'blocks.exception', 'blocks.logger', 'blocks.router',
    /*
     * 3rd Party modules
     */
    'ngplus'
]);

module.exports = coreModule;

bulk(__dirname, ['./**/!(*_index|*.spec).js']);
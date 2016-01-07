"use strict";

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
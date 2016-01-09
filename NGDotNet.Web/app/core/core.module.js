'use strict';

var coreModule = angular.module('app.core', [
    /*
     * Angular modules
     */
    'ngAnimate', 'ngSanitize',
    /*
     * Our reusable cross app code modules
     */
    'blocks.exception', 'blocks.logger', 'blocks.router',
    /*
     * 3rd Party modules
     */
    'ui.router', 'ngplus'
]);

module.exports = coreModule;
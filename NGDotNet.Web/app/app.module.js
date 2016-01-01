"use strict";

require('jquery');
require('angular');
require('angular-animate');
require('angular-route');
require('angular-sanitize');
require('extras.angular.plus');

require('./templates');
require('./avengers/_index');
require('./blocks/exception/_index');
require('./blocks/logger/_index');
require('./blocks/router/_index');
require('./core/_index');
require('./dashboard/_index');
require('./layout/_index');
require('./widgets/_index');

angular.element(document).ready(function() {
    // mount on window for testing
    window.app = angular.module('app', [
        /*
         * Order is not important. Angular makes a
         * pass to register all of the modules listed
         * and then when app.dashboard tries to use app.data,
         * its components are available.
         */

        /*
         * Everybody has access to these.
         * We could place these under every feature area,
         * but this is easier to maintain.
         */
        'ngRoute',
        'templates',
        'app.core',
        'app.widgets',

        /*
         * Feature areas
         */
        'app.avengers',
        'app.dashboard',
        'app.layout'
    ]);

    angular.bootstrap(document, ['app'], { debugInfoEnabled: true });
});

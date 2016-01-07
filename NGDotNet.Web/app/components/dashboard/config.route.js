"use strict";

var dashboardModule = require('./_index');

dashboardModule.run(appRun);

/* @ngInject */
function appRun(routehelper) {
    routehelper.configureRoutes(getRoutes());
}

function getRoutes() {
    return [
        {
            url: '/',
            config: {
                template: require('./dashboard.html'), //templateUrl: 'dashboard/dashboard.html',
                controller: 'Dashboard',
                controllerAs: 'vm',
                title: 'dashboard',
                settings: {
                    nav: 1,
                    content: '<i class="fa fa-dashboard"></i> Dashboard'
                }
            }
        }
    ];
}
"use strict";

var mainApp = angular.module('app', []);

mainApp.run(appRun);

/* @ngInject */
function appRun(routehelper) {
    routehelper.configureRoutes(getRoutes());
}

function getRoutes() {
    return [
        {
            url: '/',
            config: {
                template: require('./components/dashboard/dashboard.html'),
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
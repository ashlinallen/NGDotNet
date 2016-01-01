"use strict";

var avengersModule = require('./_index');

avengersModule.run(appRun);

/* @ngInject */
function appRun(routehelper) {
    routehelper.configureRoutes(getRoutes());
}

function getRoutes() {
    return [
        {
            url: '/avengers',
            config: {
                templateUrl: 'avengers/avengers.html',
                controller: 'Avengers',
                controllerAs: 'vm',
                title: 'avengers',
                settings: {
                    nav: 2,
                    content: '<i class="fa fa-lock"></i> Avengers'
                }
            }
        }
    ];
}
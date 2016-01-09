'use strict';

var dashboardModule = require('./dashboard.module.js');

dashboardModule.run(appRun);

appRun.$inject = ['statehelper'];
function appRun(statehelper) {
    statehelper.configureStates(getStates());
}

function getStates() {
    return [
        {
            name: 'dashboard',
            config: {
                template: require('./dashboard.html'),
                controller: 'Dashboard',
                controllerAs: 'vm',
                parent: 'rootLayout',
                url: '/dashboard',
                title: 'dashboard',
                settings: {
                    nav: 1,
                    content: '<i class="fa fa-dashboard"></i> Dashboard'
                }
            }
        }
    ];
}
'use strict';

var dashboardModule = require('../../../components/dashboard/dashboard.module.js');

dashboardModule.run(appRun);

function appRun(statehelper) {
    statehelper.configureStates(getStates());
}

function getStates() {
    return [
        {
            name: 'rootLayout',
            config: {
                abstract: true,
                views: {
                    '@': {
                        template: require('./shell.html'),
                        controller: 'Shell',
                        controllerAs: 'vm'
                    }
                }
            }
        }
    ];
}

appRun.$inject = ['statehelper'];
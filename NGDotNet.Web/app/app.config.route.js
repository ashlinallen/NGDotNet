'use strict';

var app = require('./app.module.js');

function appRun($state, statehelper) {
    statehelper.configureStates(getStates());
}

appRun.$inject = ['$state', 'statehelper'];

app.run(appRun);

function getStates() {
    return [
        {
            name: 'rootLayout',
            config: {
                abstract: true,
                views: {
                    '@': {
                        template: require('./shared/layout/shell/shell.html'),
                        controller: 'Shell',
                        controllerAs: 'vm'
                    },
                    'topnav@rootLayout': {
                        template: require('./shared/layout/topnav/topnav.html')
                    },
                    'sidebar@rootLayout': {
                        template: require('./shared/layout/sidebar/sidebar.html'),
                        controller: 'Sidebar',
                        controllerAs: 'vm'
                    }
                }
            }
        }
    ];
}
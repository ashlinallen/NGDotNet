'use strict';

var app = require('./app.module.js');

app.run(appRun);

appRun.$inject = ['$state', 'statehelper'];
function appRun($state, statehelper) {
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
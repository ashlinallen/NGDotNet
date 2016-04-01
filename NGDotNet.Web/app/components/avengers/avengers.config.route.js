'use strict';

var avengersModule = require('./avengers.module.js');

avengersModule.run(appRun);

function appRun(statehelper) {
    statehelper.configureStates(getStates());
}

function getStates() {
    return [
        {
            name: 'avengers',
            config: {
                template: require('./avengers.html'),
                controller: 'Avengers',
                controllerAs: 'vm',
                parent: 'rootLayout',
                url: '/avengers',
                title: 'avengers',
                settings: {
                    nav: 2,
                    content: '<i class="fa fa-lock"></i> Avengers'
                }
            }
        }
    ];
}

appRun.$inject = ['statehelper'];
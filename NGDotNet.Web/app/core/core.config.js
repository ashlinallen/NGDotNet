'use strict';

var coreModule = require('./core.module.js');

var config = {
    appErrorPrefix: '[NG-Modular Error] ', //Configure the exceptionHandler decorator
    appTitle: 'Angular Modular Demo',
    version: '1.0.0'
};

coreModule.value('config', config);

coreModule.config(configure);

function configure($compileProvider, $logProvider, $urlRouterProvider, $stateProvider, $locationProvider, statehelperConfigProvider, exceptionHandlerProvider) {
    var resolveAlways = {
        ready: ['dataservice', function (dataservice) {
            return dataservice.ready();
        }]
    };

    // Configure the common route provider
    statehelperConfigProvider.config = {
        $stateProvider: $stateProvider,
        docTitle: 'NG-Modular: ',
        resolveAlways: resolveAlways
    }

    // Configure the common exception handler
    exceptionHandlerProvider.configure(config.appErrorPrefix);
    
    // turn debugging off/on (no info or warn)
    $logProvider.debugEnabled(false);
    $compileProvider.debugInfoEnabled(false);
    
    $locationProvider.html5Mode(true);
    
    $urlRouterProvider.otherwise('/dashboard');
}

configure.$inject = ['$compileProvider', '$logProvider', '$urlRouterProvider', '$stateProvider', '$locationProvider', 'statehelperConfigProvider', 'exceptionHandlerProvider'];
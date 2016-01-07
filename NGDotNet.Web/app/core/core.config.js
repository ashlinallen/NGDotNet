"use strict";

var coreModule = require('./core.module.js');

coreModule.config(toastrConfig);

/* @ngInject */
function toastrConfig(toastr) {
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';
}

var config = {
    appErrorPrefix: '[NG-Modular Error] ', //Configure the exceptionHandler decorator
    appTitle: 'Angular Modular Demo',
    version: '1.0.0'
};

coreModule.value('config', config);

coreModule.config(configure);

/* @ngInject */
function configure($logProvider, $routeProvider, $locationProvider, routehelperConfigProvider, exceptionHandlerProvider) {
    // turn debugging off/on (no info or warn)
    if ($logProvider.debugEnabled) {
        $logProvider.debugEnabled(true);
    }

    // Configure the common route provider
    routehelperConfigProvider.config.$routeProvider = $routeProvider;
    routehelperConfigProvider.config.docTitle = 'NG-Modular: ';
    var resolveAlways = {/* @ngInject */
        ready: function (dataservice) {
            return dataservice.ready();
        }
    };
    routehelperConfigProvider.config.resolveAlways = resolveAlways;

    // Configure the common exception handler
    exceptionHandlerProvider.configure(config.appErrorPrefix);

    $locationProvider.html5Mode(true);
}
'use strict';

var exceptionModule = require('./exception.module.js');

// Include in index.html so that app level exceptions are handled.
// Exclude from testRunner.html which should run exactly what it wants to run

exceptionModule
    .provider('exceptionHandler', exceptionHandlerProvider)
    .config(config);


/**
 * Must configure the exception handling
 * @return {[type]}
 */
function exceptionHandlerProvider() {
    this.config = {
        appErrorPrefix: undefined
    };

    this.configure = function (appErrorPrefix) {
        this.config.appErrorPrefix = appErrorPrefix;
    };

    this.$get = function () {
        return {config: this.config};
    };
}


/**
 * Configure by setting an optional string value for appErrorPrefix.
 * Accessible via config.appErrorPrefix (via config value).
 * @param  {[type]} $provide
 * @return {[type]}
 */
function config($provide) {
    $provide.decorator('$exceptionHandler', extendExceptionHandler);
}

config.$inject = ['$provide'];


/**
 * Extend the $exceptionHandler service to also display a toast.
 * @param  {Object} $delegate
 * @param  {Object} exceptionHandler
 * @param  {Object} logger
 * @return {Function} the decorated $exceptionHandler service
 */
function extendExceptionHandler($delegate, exceptionHandler, logger) {
    return function (exception, cause) {
        var appErrorPrefix = exceptionHandler.config.appErrorPrefix || '';
        var errorData = {exception: exception, cause: cause};
        exception.message = appErrorPrefix + exception.message;
        $delegate(exception, cause);
        /**
         * Could add the error to a service's collection,
         * add errors to $rootScope, log errors to remote web server,
         * or log locally. Or throw hard. It is entirely up to you.
         * throw exception;
         *
         * @example
         *     throw { message: 'error message we added' };
         */
        logger.error(exception.message, errorData);
    };
}

extendExceptionHandler.$inject = ['$delegate', 'exceptionHandler', 'logger'];
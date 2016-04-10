'use strict';

var routerModule = require('./router.module.js');

routerModule
    .provider('statehelperConfig', statehelperConfig)
    .factory('statehelper', statehelper);

// Must configure via the statehelperConfigProvider
function statehelperConfig() {
    this.config = {
        // These are the properties we need to set
        // $stateProvider: undefined
        // docTitle: ''
        // resolveAlways: {ready: function(){ } }
    };

    this.$get = function () {
        return {
            config: this.config
        };
    };
}

function statehelper($location, $rootScope, $state, logger, statehelperConfig) {
    var handlingStateChangeError = false;
    var stateCounts = {
        errors: 0,
        changes: 0
    };
    var states = [];
    var $stateProvider = statehelperConfig.config.$stateProvider;

    var service = {
        configureStates: configureStates,
        getStates: getStates,
        stateCounts: stateCounts
    };

    init();

    return service;

    function configureStates(states) {
        states.forEach(function(state) {
            state.config.resolve = angular.extend(state.config.resolve || {}, statehelperConfig.config.resolveAlways);
            $stateProvider.state(state.name, state.config);
        });
    }

    function handleRoutingErrors() {
        // Route cancellation:
        // On routing error, go to the dashboard.
        // Provide an exit clause if it tries to do it twice.
        $rootScope.$on('$stateChangeError',
            //function(event, current, previous, rejection) {
            //    if (handlingStateChangeError) {
            //        return;
            //    }
            //    stateCounts.errors++;
            //    handlingStateChangeError = true;
            //    var destination = (current && (current.title || current.name || current.loadedTemplateUrl)) ||
            //        'unknown target';
            //    var msg = 'Error routing to ' + destination + '. ' + (rejection.msg || '');
            //    logger.warning(msg, [current]);
            //    $location.path('/');
            //}
            function(event, toState, toParams, fromState, fromParams, error) {
                if (handlingStateChangeError) {
                    return;
                }
                stateCounts.errors++;
                handlingStateChangeError = true;
                var destination = (toState && (toState.title || toState.name || toState.loadedTemplateUrl)) ||
                    'unknown target';
                var msg = 'Error routing to ' + destination + '. ' + (error || '');
                logger.warning(msg, [toState]);
                $location.path('/');
            }
        );
    }

    function init() {
        handleRoutingErrors();
        updateDocTitle();
    }

    function getStates() {
        for (var prop in $state.get()) {
            if ($state.get().hasOwnProperty(prop)) {
                var state = $state.get()[prop];
                var isState = !!state.title;
                if (isState) {
                    states.push(state);
                }
            }
        }
        return states;
    }

    function updateDocTitle() {
        $rootScope.$on('$stateChangeSuccess',
            function(event, current) {
                stateCounts.changes++;
                handlingStateChangeError = false;
                var title = statehelperConfig.config.docTitle + ' ' + (current.title || '');
                $rootScope.title = title; // databind to <title>
            }
        );
    }
}

statehelper.$inject = ['$location', '$rootScope', '$state', 'logger', 'statehelperConfig'];
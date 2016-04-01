'use strict';

var widgetsModule = require('../widgets.module.js');

require('./spinner.scss');

widgetsModule.directive('spinner', Spinner);

function Spinner($window) {
    // Description:
    // Creates a new Spinner and sets its options
    // Usage:
    // <div data-spinner='vm.spinnerOptions'></div>
    var directive = {
        link: link,
        restrict: 'A'
    };
    
    return directive;

    function link(scope, element, attrs) {
        scope.spinner = null;
        scope.$watch(attrs.ccSpinner, function (options) {
            if (scope.spinner) {
                scope.spinner.stop();
            }
            scope.spinner = new $window.Spinner(options);
            scope.spinner.spin(element[0]);
        }, true);
    }
}

Spinner.$inject = ['$window'];
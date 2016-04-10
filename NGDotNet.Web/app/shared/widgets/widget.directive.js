'use strict';

var widgetsModule = require('./widgets.module.js');

require('./widget.scss');

widgetsModule.directive('widget', Widget);

function Widget() {
    // Usage:
    // <a data-widget-minimize></a>
    // Creates:
    // <a data-widget-minimize='' href='#'><i class='fa fa-chevron-up'></i></a>
    var directive = {
        template: require('./widget.html'),
        restrict: 'A',
        controllerAs: '$ctrl',
        transclude: true,
        replace: true,
        scope: {
            ngClass: '@?',
            title: '@?',
            allowCollapse: '@?'
        }
    };

    return directive;
}
'use strict';

var widgetsModule = require('../widgets.module.js');

require('./widget-header.scss');

widgetsModule.directive('widgetHeader', WidgetHeader);

function WidgetHeader() {
    // Usage:
    // <div data-widget-header title='vm.map.title'></div>
    // Creates:
    // <div data-widget-header=''
    //      title='Avengers Movie'
    //      allow-collapse='true' </div>
    var directive = {
        //link: link,
        scope: {
            'title': '@',
            'subtitle': '@',
            'rightText': '@',
            'allowCollapse': '@'
        },
        template: require('./widget-header.html'),
        restrict: 'A'
    };
    
    return directive;

    //function link(scope, element, attrs) {
    //    attrs.$set('class', 'widget-head');
    //}
}
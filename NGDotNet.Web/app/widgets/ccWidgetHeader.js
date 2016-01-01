"use strict";

var widgetsModule = require('./_index');
require('jquery');

widgetsModule.directive('ccWidgetHeader', ccWidgetHeader);

function ccWidgetHeader() {
    // Usage:
    // <div data-cc-widget-header title="vm.map.title"></div>
    // Creates:
    // <div data-cc-widget-header=""
    //      title="Avengers Movie"
    //      allow-collapse="true" </div>
    var directive = {
        //link: link,
        scope: {
            'title': '@',
            'subtitle': '@',
            'rightText': '@',
            'allowCollapse': '@'
        },
        templateUrl: 'widgets/widgetheader.html',
        restrict: 'A'
    };
    
    return directive;

    //function link(scope, element, attrs) {
    //    attrs.$set('class', 'widget-head');
    //}
}
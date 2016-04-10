'use strict';

var widgetsModule = require('../widgets.module.js');

widgetsModule.directive('widgetClose', WidgetClose);

function WidgetClose() {
    // Usage:
    // <a data-widget-close></a>
    // Creates:
    // <a data-widget-close='' href='#' class='wclose'>
    //     <i class='fa fa-remove'></i>
    // </a>
    var directive = {
        link: link,
        template: require('./widget-close.html'),
        restrict: 'A'
    };
    
    return directive;

    function link(scope, element, attrs) {
        attrs.$set('href', '#');
        attrs.$set('wclose');
        element.click(closeEl);

        function closeEl(e) {
            e.preventDefault();
            element.parent().parent().parent().hide(100);
        }
    }
}
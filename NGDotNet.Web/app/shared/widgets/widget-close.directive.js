'use strict';

var widgetsModule = require('./widgets.module.js');

require('./widget-close.scss');

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
        template: '<i class="fa fa-remove"></i>',
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
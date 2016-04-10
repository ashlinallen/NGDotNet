'use strict';

var widgetsModule = require('../widgets.module.js');

widgetsModule.directive('widgetMinimize', WidgetMinimize);

function WidgetMinimize() {
    // Usage:
    // <a data-widget-minimize></a>
    // Creates:
    // <a data-widget-minimize='' href='#'><i class='fa fa-chevron-up'></i></a>
    var directive = {
        link: link,
        template:  require('./widget-minimize.html'),
        restrict: 'A'
    };
    
    return directive;

    function link(scope, element, attrs) {
        //$('body').on('click', '.widget .wminimize', minimize);
        attrs.$set('href', '#');
        attrs.$set('wminimize');
        $(element).click(minimize);

        function minimize(e) {
            e.preventDefault();
            var $wcontent = element.parent().parent().next('.widget-content');
            var iElement = element.children('i');
            if ($wcontent.is(':visible')) {
                iElement.removeClass('fa fa-chevron-up');
                iElement.addClass('fa fa-chevron-down');
            } else {
                iElement.removeClass('fa fa-chevron-down');
                iElement.addClass('fa fa-chevron-up');
            }
            $wcontent.toggle(500);
        }
    }
}
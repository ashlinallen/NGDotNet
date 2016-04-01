'use strict';

var widgetsModule = require('../widgets.module.js');

require('./sidebar.scss');

widgetsModule.directive('sidebar', Sidebar);

function Sidebar() {
    // Opens and closes the sidebar menu.
    // Usage:
    // <div data-sidebar'>
    // <div data-sidebar whenDoneAnimating='vm.sidebarReady()'>
    // Creates:
    // <div data-sidebar class='sidebar'>
    var directive = {
        link: link,
        restrict: 'A',
        scope: {
            whenDoneAnimating: '&?'
        }
    };
    
    return directive;

    function link(scope, element) {
        var $sidebarInner = $(element).find('.sidebar-inner');
        var $dropdownElement = $(element).find('.sidebar-dropdown a');
        element.addClass('sidebar');
        $dropdownElement.click(dropdown);

        function dropdown(e) {
            var dropClass = 'dropy';
            e.preventDefault();
            if (!$dropdownElement.hasClass(dropClass)) {
                $sidebarInner.slideDown(350, scope.whenDoneAnimating);
                $dropdownElement.addClass(dropClass);
            } else if ($dropdownElement.hasClass(dropClass)) {
                $dropdownElement.removeClass(dropClass);
                $sidebarInner.slideUp(350, scope.whenDoneAnimating);
            }
        }
    }
}
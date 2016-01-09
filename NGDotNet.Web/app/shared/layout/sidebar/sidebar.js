'use strict';

var layoutModule = require('../layout.module.js');

require('./sidebar.scss');

layoutModule.controller('Sidebar', Sidebar);

Sidebar.$inject = ['$state', 'statehelper'];
function Sidebar($state, statehelper) {
    var vm = this;
    var states = statehelper.getStates();
    vm.isCurrent = isCurrent;
    //vm.sidebarReady = function(){console.log('done animating menu')}; // example

    activate();

    function activate() {
        getNavstates();
    }

    function getNavstates() {
        vm.navstates = states.filter(function (r) {
            return r.settings && r.settings.nav;
        }).sort(function (r1, r2) {
            return r1.settings.nav - r2.settings.nav;
        });
    }

    function isCurrent(state) {
        if (!state.title || !$state.current || !$state.current.title) {
            return '';
        }
        var menuName = state.title;
        return $state.current.title.substr(0, menuName.length) === menuName ? 'current' : '';
    }
}
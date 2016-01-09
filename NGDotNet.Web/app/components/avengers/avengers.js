'use strict';

var avengersModule = require('./avengers.module.js');

require('./avengers.scss');

avengersModule.controller('Avengers', Avengers);

Avengers.$inject = ['dataservice', 'logger'];
function Avengers (dataservice, logger) {
    var vm = this;
    vm.avengers = [];
    vm.title = 'Avengers';

    activate();

    function activate() {
        return getAvengers().then(function () {
            logger.info('Activated Avengers View');
        });
    }

    function getAvengers() {
        return dataservice.getAvengers().then(function (data) {
            vm.avengers = data;
            return vm.avengers;
        });
    }
}
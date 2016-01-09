'use strict';

var dashboardModule = require('./dashboard.module.js');

require('./dashboard.scss');

dashboardModule.controller('Dashboard', Dashboard);

Dashboard.$inject = ['$q', 'dataservice', 'logger'];
function Dashboard($q, dataservice, logger) {
    var vm = this;

    vm.news = {
        title: 'Marvel Avengers',
        description: 'Marvel Avengers 2 is now in production!'
    };
    vm.avengerCount = 0;
    vm.avengers = [];
    vm.title = 'Dashboard';

    activate();

    function activate() {
        var promises = [getAvengerCount(), getAvengersCast()];
        
        return $q.all(promises).then(function () {
            logger.info('Activated Dashboard View');
        });
    }

    function getAvengerCount() {
        return dataservice.getAvengerCount().then(function (data) {
            vm.avengerCount = data;
            return vm.avengerCount;
        });
    }

    function getAvengersCast() {
        return dataservice.getAvengersCast().then(function (data) {
            vm.avengers = data;
            return vm.avengers;
        });
    }
}
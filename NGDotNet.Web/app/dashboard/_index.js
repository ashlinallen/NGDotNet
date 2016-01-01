"use strict";

var bulk = require('bulk-require');

var dashboardModule = angular.module('app.dashboard', []);

module.exports = dashboardModule;

bulk(__dirname, ['./**/!(*_index|*.spec).js']);
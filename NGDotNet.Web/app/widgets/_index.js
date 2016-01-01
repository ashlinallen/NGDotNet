"use strict";

var bulk = require('bulk-require');

var widgetsModule = angular.module('app.widgets', []);

module.exports = widgetsModule;

bulk(__dirname, ['./**/!(*_index|*.spec).js']);
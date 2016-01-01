"use strict";

var bulk = require('bulk-require');

var layoutModule = angular.module('app.layout', []);

module.exports = layoutModule;

bulk(__dirname, ['./**/!(*_index|*.spec).js']);
"use strict";

var bulk = require('bulk-require');

var loggerModule = angular.module('blocks.logger', []);

module.exports = loggerModule;

bulk(__dirname, ['./**/!(*_index|*.spec).js']);
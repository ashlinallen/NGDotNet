"use strict";

var bulk = require('bulk-require');

var exceptionModule = angular.module('blocks.exception', ['blocks.logger']);

module.exports = exceptionModule;

bulk(__dirname, ['./**/!(*_index|*.spec).js']);
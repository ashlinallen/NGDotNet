"use strict";

var bulk = require('bulk-require');

var routerModule = angular.module('blocks.router', ['ngRoute', 'blocks.logger']);

module.exports = routerModule;

bulk(__dirname, ['./**/!(*_index|*.spec).js']);
"use strict";

var bulk = require('bulk-require');

var avengersModule = angular.module('app.avengers', []);

module.exports = avengersModule;

bulk(__dirname, ['./**/!(*_index|*.spec).js']);
"use strict";

var coreModule = require('./core.module.js'),
    toastr     = require('toastr'),
    moment     = require('moment');

coreModule
    .constant('toastr', toastr)
    .constant('moment', moment);
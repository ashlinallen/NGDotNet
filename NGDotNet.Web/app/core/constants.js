"use strict";

var coreModule = require('./_index'),
    toastr     = require('toastr'),
    moment     = require('moment');

coreModule
    .constant('toastr', toastr)
    .constant('moment', moment);
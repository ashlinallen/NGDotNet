"use strict";
 
var modules = require.context('./', true, /^\.\/(?!_index|spec).*\.js$/);

modules.keys().forEach(modules);
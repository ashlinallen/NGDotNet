// Have Webpack require all of our Javascript files in the current directory and its subdirectories.
var modules = require.context('./', true, /^\.\/(?!_index|spec).*\.js$/);

modules.keys().forEach(modules);
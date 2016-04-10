var path = require('path');

var PATHS = {
    appEntryPoint: path.join(__dirname, 'app/_index'),
    clientAppDir: path.join(__dirname, 'app/'),
    buildDir: path.join(__dirname, 'dist'),
    indexTemplate: 'assets/index.template.html',
    favIcon: 'assets/images/favicon.ico',
    styleLintConfig: path.join(__dirname, 'stylelint.config.js')
};

module.exports = PATHS;
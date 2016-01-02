'use strict';

var config = {
    'serverPort': 8080,

    'browserSync': {
        'debugBrowsers': ["google chrome"],
        'browserPort': 3000,
        'UIPort': 3001,
        'proxyServer': 'ngdotnet.local'
    },

    'styles': {
        'src' : 'app/assets/styles/**/*.scss',
        'dest': 'gulp_build/css',
        'vendorDestFilename': 'vendor.css'
    },

    'scripts': {
        'src' : 'app/**/*.js',
        'dest': 'gulp_build/js',
        'vendorDestFilename': 'vendor.js'
    },

    'images': {
        'src' : 'app/assets/images/**/*',
        'dest': 'gulp_build/images'
    },

    'fonts': {
        'src' : ['app/assets/fonts/**/*'],
        'dest': 'gulp_build/fonts',
        'bowerFonts': [
            'bower_components/bootstrap/dist/fonts/**.*',
            'bower_components/font-awesome/fonts/**.*'
        ]
    },

    'views': {
        'watch': [
            'app/index.html',
            'app/**/*.html'
        ],
        'src': 'app/**/*.html',
        'dest': 'app/'
    },

    'gzip': {
        'src': 'gulp_build/**/*.{html,xml,json,css,js,js.map}',
        'dest': 'gulp_build/',
        'options': {}
    },

    'dist': {
        'root': 'gulp_build'
    },

    'browserify': {
        'entries'   : ['./app/app.module.js'],
        'destFilename': 'main.js',
        'sourcemap' : true
    },
    
    'autoPrefixer': {
        'options': { browsers: ['last 2 versions', '> 5%', 'ie > 8'] }
    }
};

module.exports = config;
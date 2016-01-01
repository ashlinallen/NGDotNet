'use strict';

var config = {

    'browserPort'  : 3000,
    'UIPort'       : 3001,
    'serverPort'   : 8080,

    'styles': {
        'src' : 'app/assets/styles/**/*.scss',
        'dest': 'gulp_build/css'
    },

    'scripts': {
        'src' : 'app/**/*.js',
        'dest': 'gulp_build/js'
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
        'bundleName': 'main.js',
        'sourcemap' : true
    }
    
};

module.exports = config;
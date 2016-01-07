'use strict';

var path = require('path'),
    webpack = require('webpack'),
    ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

var config = {
    cache: true,
    debug: false,
    context: path.join(__dirname),
    entry: {
        'app': './app/app.module.js',
        'vendor': [
            'angular',
            'angular-animate',
            'angular-bootstrap',
            'angular-route',
            'angular-sanitize',
            'angularplus',
            'bootstrap',
            'font-awesome-webpack',
            'jquery',
            'moment',
            'toastr'
        ]
    },
    output: {
        path: './dist',
        publicPath: 'http://localhost:8080/dist/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.html$/, loaders: ['ng-cache?prefix=[dir]/[dir]'] },
            { test: /\.css$/, loaders: ['style', 'css'] },
            { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
            { test: /\.png$/, loader: 'url?limit=100000' },
            { test: /\.jpg$/, loader: 'file' },
            { test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' }),
        new ngAnnotatePlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/)
    ]
};

module.exports = config;
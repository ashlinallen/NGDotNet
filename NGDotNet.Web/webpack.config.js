'use strict';

var path = require('path'),
    webpack = require('webpack');

var config = {
    cache: true,
    debug: false,
    context: path.join(__dirname),
    entry: {
        'app': './app/_index.js',
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
            'toastr',
            'ui-router'
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
            { test: /\.(png|jpg|jpeg|gif)$/, loader: 'url?limit=100000' },
            { test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' }),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/)
    ]
};

module.exports = config;
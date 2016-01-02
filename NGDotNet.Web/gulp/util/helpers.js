'use strict';

var _ = require('lodash');

/**
 * Helper function(s)
 */

function getBowerPackageIds() {
    // read bower.json and get dependencies' package ids
    var bowerManifest = {};
    
    try {
        bowerManifest = require('../../bower.json');
    } catch (e) {
        // does not have a bower.json manifest
    }
    
    return _.keys(bowerManifest.dependencies) || [];

}


function getNPMPackageIds() {
    // read package.json and get dependencies' package ids
    var packageManifest = {};
    
    try {
        packageManifest = require('../package.json');
    } catch (e) {
        // does not have a package.json manifest
    }
    
    return _.keys(packageManifest.dependencies) || [];
}

exports.getNPMPackageIds = getNPMPackageIds;
exports.getBowerPackageIds = getBowerPackageIds;
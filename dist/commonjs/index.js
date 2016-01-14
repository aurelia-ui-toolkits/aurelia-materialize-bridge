'use strict';

exports.__esModule = true;
exports.configure = configure;

var _aureliaFramework = require('aurelia-framework');

var _configBuilder = require('./config-builder');

function configure(aurelia, configCallback) {
  var builder = new _configBuilder.ConfigBuilder();

  if (configCallback !== undefined && typeof configCallback === 'function') {
    configCallback(builder);
  }

  if (builder.useGlobalResources) {
    aurelia.globalResources(builder.globalResources);
  }
}
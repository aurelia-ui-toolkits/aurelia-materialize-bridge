'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = configure;

var _toastService = require('./toast/toastService');

Object.keys(_toastService).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _toastService[key];
    }
  });
});

require('materialize');

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
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = configure;

var _exports = require('./exports');

Object.keys(_exports).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _exports[key];
    }
  });
});

var _configBuilder = require('./config-builder');

var _scrollfirePatch = require('./scrollfire/scrollfire-patch');

var _polyfills = require('./common/polyfills');

function applyPolyfills() {
  (0, _polyfills.polyfillElementClosest)();
}

function configure(aurelia, configCallback) {
  applyPolyfills();
  var builder = new _configBuilder.ConfigBuilder();

  if (configCallback !== undefined && typeof configCallback === 'function') {
    configCallback(builder);
  }

  if (builder.useGlobalResources) {
    aurelia.globalResources(builder.globalResources);
  }
  if (builder.useScrollfirePatch) {
    new _scrollfirePatch.ScrollfirePatch().patch();
  }
}
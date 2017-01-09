define(['exports', './exports', './config-builder', './scrollfire/scrollfire-patch', './common/polyfills'], function (exports, _exports, _configBuilder, _scrollfirePatch, _polyfills) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  Object.keys(_exports).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _exports[key];
      }
    });
  });


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
});
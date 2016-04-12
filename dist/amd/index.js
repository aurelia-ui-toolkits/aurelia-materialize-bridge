define(['exports', './toast/toastService', './config-builder', './scrollfire/scrollfire-patch', 'materialize'], function (exports, _toastService, _configBuilder, _scrollfirePatch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  Object.keys(_toastService).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _toastService[key];
      }
    });
  });
  function configure(aurelia, configCallback) {
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
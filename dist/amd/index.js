define(['exports', 'materialize', 'aurelia-framework', './config-builder'], function (exports, _materialize, _aureliaFramework, _configBuilder) {
  'use strict';

  exports.__esModule = true;
  exports.configure = configure;

  function configure(aurelia, configCallback) {
    var builder = new _configBuilder.ConfigBuilder();

    if (configCallback !== undefined && typeof configCallback === 'function') {
      configCallback(builder);
    }

    if (builder.useGlobalResources) {
      aurelia.globalResources(builder.globalResources);
    }
  }
});
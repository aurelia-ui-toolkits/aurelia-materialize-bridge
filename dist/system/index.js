System.register(['aurelia-framework', './config-builder'], function (_export) {
  'use strict';

  var Aurelia, ConfigBuilder;

  _export('configure', configure);

  function configure(aurelia, configCallback) {
    var builder = new ConfigBuilder();

    if (configCallback !== undefined && typeof configCallback === 'function') {
      configCallback(builder);
    }

    if (builder.useGlobalResources) {
      aurelia.globalResources(builder.globalResources);
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      Aurelia = _aureliaFramework.Aurelia;
    }, function (_configBuilder) {
      ConfigBuilder = _configBuilder.ConfigBuilder;
    }],
    execute: function () {}
  };
});
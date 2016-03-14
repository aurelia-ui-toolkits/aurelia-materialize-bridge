System.register(['materialize', 'aurelia-framework', './config-builder', 'aurelia-materialize-bridge/toast/toastService'], function (_export) {
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
    setters: [function (_materialize) {}, function (_aureliaFramework) {
      Aurelia = _aureliaFramework.Aurelia;
    }, function (_configBuilder) {
      ConfigBuilder = _configBuilder.ConfigBuilder;
    }, function (_aureliaMaterializeBridgeToastToastService) {
      for (var _key in _aureliaMaterializeBridgeToastToastService) {
        if (_key !== 'default') _export(_key, _aureliaMaterializeBridgeToastToastService[_key]);
      }
    }],
    execute: function () {}
  };
});
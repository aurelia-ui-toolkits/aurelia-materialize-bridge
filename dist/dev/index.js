System.register(['materialize', './config-builder', './toast/toastService'], function (_export) {
  'use strict';

  var ConfigBuilder;

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
    setters: [function (_materialize) {}, function (_configBuilder) {
      ConfigBuilder = _configBuilder.ConfigBuilder;
    }, function (_toastToastService) {
      for (var _key in _toastToastService) {
        if (_key !== 'default') _export(_key, _toastToastService[_key]);
      }
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=dist/dev/index.js.map

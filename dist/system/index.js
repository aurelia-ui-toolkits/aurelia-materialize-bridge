'use strict';

System.register(['materialize', './config-builder', './scrollfire/scrollfire-patch', './toast/toastService'], function (_export, _context) {
  var ConfigBuilder, ScrollfirePatch;
  return {
    setters: [function (_materialize) {}, function (_configBuilder) {
      ConfigBuilder = _configBuilder.ConfigBuilder;
    }, function (_scrollfireScrollfirePatch) {
      ScrollfirePatch = _scrollfireScrollfirePatch.ScrollfirePatch;
    }, function (_toastToastService) {
      var _exportObj = {};

      for (var _key in _toastToastService) {
        if (_key !== "default") _exportObj[_key] = _toastToastService[_key];
      }

      _export(_exportObj);
    }],
    execute: function () {
      function configure(aurelia, configCallback) {
        var builder = new ConfigBuilder();

        if (configCallback !== undefined && typeof configCallback === 'function') {
          configCallback(builder);
        }

        if (builder.useGlobalResources) {
          aurelia.globalResources(builder.globalResources);
        }
        if (builder.useScrollfirePatch) {
          new ScrollfirePatch().patch();
        }
      }

      _export('configure', configure);
    }
  };
});
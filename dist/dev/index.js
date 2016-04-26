'use strict';

System.register(['materialize', './config-builder', './scrollfire/scrollfire-patch', './toast/toastService', './common/attributeManager', './common/attributes', './common/events'], function (_export, _context) {
  var ConfigBuilder, ScrollfirePatch, version;
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
    }, function (_commonAttributeManager) {
      var _exportObj2 = {};

      for (var _key2 in _commonAttributeManager) {
        if (_key2 !== "default") _exportObj2[_key2] = _commonAttributeManager[_key2];
      }

      _export(_exportObj2);
    }, function (_commonAttributes) {
      var _exportObj3 = {};

      for (var _key3 in _commonAttributes) {
        if (_key3 !== "default") _exportObj3[_key3] = _commonAttributes[_key3];
      }

      _export(_exportObj3);
    }, function (_commonEvents) {
      var _exportObj4 = {};

      for (var _key4 in _commonEvents) {
        if (_key4 !== "default") _exportObj4[_key4] = _commonEvents[_key4];
      }

      _export(_exportObj4);
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

      _export('version', version = '0.5.1');

      _export('version', version);
    }
  };
});
//# sourceMappingURL=dist/dev/index.js.map

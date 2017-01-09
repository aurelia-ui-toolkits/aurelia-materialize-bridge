'use strict';

System.register(['./config-builder', './scrollfire/scrollfire-patch', './common/polyfills', './exports'], function (_export, _context) {
  "use strict";

  var ConfigBuilder, ScrollfirePatch, polyfillElementClosest;


  function applyPolyfills() {
    polyfillElementClosest();
  }

  function configure(aurelia, configCallback) {
    applyPolyfills();
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

  return {
    setters: [function (_configBuilder) {
      ConfigBuilder = _configBuilder.ConfigBuilder;
    }, function (_scrollfireScrollfirePatch) {
      ScrollfirePatch = _scrollfireScrollfirePatch.ScrollfirePatch;
    }, function (_commonPolyfills) {
      polyfillElementClosest = _commonPolyfills.polyfillElementClosest;
    }, function (_exports) {
      var _exportObj = {};

      for (var _key in _exports) {
        if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _exports[_key];
      }

      _export(_exportObj);
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=dist/dev/index.js.map

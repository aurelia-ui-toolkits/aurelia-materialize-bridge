System.register([], function (_export) {
  'use strict';

  var ConfigBuilder;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      ConfigBuilder = (function () {
        function ConfigBuilder() {
          _classCallCheck(this, ConfigBuilder);

          this.useGlobalResources = true;
          this.globalResources = [];
        }

        ConfigBuilder.prototype.useClickCounter = function useClickCounter() {
          this.globalResources.push('./click-counter');
          return this;
        };

        ConfigBuilder.prototype.withoutGlobalResources = function withoutGlobalResources() {
          this.useGlobalResources = false;
          return this;
        };

        return ConfigBuilder;
      })();

      _export('ConfigBuilder', ConfigBuilder);
    }
  };
});
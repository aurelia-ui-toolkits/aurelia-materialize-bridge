'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.version = undefined;
exports.configure = configure;

var _toastService = require('./toast/toastService');

Object.keys(_toastService).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _toastService[key];
    }
  });
});

var _attributeManager = require('./common/attributeManager');

Object.keys(_attributeManager).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _attributeManager[key];
    }
  });
});

var _attributes = require('./common/attributes');

Object.keys(_attributes).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _attributes[key];
    }
  });
});

var _events = require('./common/events');

Object.keys(_events).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _events[key];
    }
  });
});

var _configBuilder = require('./config-builder');

var _scrollfirePatch = require('./scrollfire/scrollfire-patch');

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

var version = exports.version = '0.5.1';
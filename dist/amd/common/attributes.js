define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getBooleanFromAttributeValue = getBooleanFromAttributeValue;
  function getBooleanFromAttributeValue(value) {
    return value === true || value === 'true';
  }
});
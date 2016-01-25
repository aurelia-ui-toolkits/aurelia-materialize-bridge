System.register([], function (_export) {
  'use strict';

  _export('getBooleanFromAttributeValue', getBooleanFromAttributeValue);

  function getBooleanFromAttributeValue(value) {
    return value === true || value === 'true';
  }

  return {
    setters: [],
    execute: function () {}
  };
});
'use strict';

exports.__esModule = true;
exports.getBooleanFromAttributeValue = getBooleanFromAttributeValue;

function getBooleanFromAttributeValue(value) {
  return value === true || value === 'true';
}
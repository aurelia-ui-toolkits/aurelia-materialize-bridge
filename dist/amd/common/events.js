define(['exports', './constants'], function (exports, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.fireEvent = fireEvent;
  exports.fireMaterializeEvent = fireMaterializeEvent;
  function fireEvent(element, name) {
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var event = new CustomEvent(name, {
      detail: data,
      bubbles: true
    });
    element.dispatchEvent(event);

    return event;
  }

  function fireMaterializeEvent(element, name) {
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    return fireEvent(element, '' + _constants.constants.eventPrefix + name, data);
  }
});
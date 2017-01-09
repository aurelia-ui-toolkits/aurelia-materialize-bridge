'use strict';

System.register([], function (_export, _context) {
  "use strict";

  function polyfillElementClosest() {
    if (typeof Element.prototype.matches !== 'function') {
      Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.webkitMatchesSelector || function matches(selector) {
        var element = this;
        var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
        var index = 0;

        while (elements[index] && elements[index] !== element) {
          ++index;
        }
        return Boolean(elements[index]);
      };
    }

    if (typeof Element.prototype.closest !== 'function') {
      Element.prototype.closest = function closest(selector) {
        var element = this;

        while (element && element.nodeType === 1) {
          if (element.matches(selector)) {
            return element;
          }

          element = element.parentNode;
        }
        return null;
      };
    }
  }

  _export('polyfillElementClosest', polyfillElementClosest);

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=../dist/dev/common/polyfills.js.map

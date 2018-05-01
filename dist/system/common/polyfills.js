System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    // MB: as far as I understand, this is to support IE11 which does not have closest
    // https://github.com/jonathantneal/closest/blob/master/closest.js
    function polyfillElementClosest() {
        if (typeof Element.prototype.matches !== "function") {
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
        if (typeof Element.prototype.closest !== "function") {
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
    exports_1("polyfillElementClosest", polyfillElementClosest);
    return {
        setters: [],
        execute: function () {
        }
    };
});
//# sourceMappingURL=polyfills.js.map
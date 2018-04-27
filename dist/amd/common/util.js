define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function wrap(parent, child) {
        child.parentNode.insertBefore(parent, child);
        parent.appendChild(child);
    }
    exports.wrap = wrap;
    function unwrap(element) {
        var wrapper = element.parentElement;
        if (wrapper.parentElement) {
            wrapper.parentElement.insertBefore(element, wrapper);
            wrapper.remove();
        }
    }
    exports.unwrap = unwrap;
    function insertAfter(element, newChild) {
        element.parentNode.insertBefore(newChild, element.nextSibling);
    }
    exports.insertAfter = insertAfter;
    /**
     * Remove undefined fields from an object
     *
     * @param options An object to clean
     */
    function cleanOptions(options) {
        Object.keys(options).filter(function (key) { return options[key] === undefined; }).forEach(function (key) { return delete options[key]; });
    }
    exports.cleanOptions = cleanOptions;
});
//# sourceMappingURL=util.js.map
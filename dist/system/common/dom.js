System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function wrap(parent, child) {
        child.parentNode.insertBefore(parent, child);
        parent.appendChild(child);
    }
    exports_1("wrap", wrap);
    function unwrap(element) {
        var wrapper = element.parentElement;
        if (wrapper.parentElement) {
            wrapper.parentElement.insertBefore(element, wrapper);
            wrapper.remove();
        }
    }
    exports_1("unwrap", unwrap);
    function insertAfter(element, newChild) {
        element.parentNode.insertBefore(newChild, element.nextSibling);
    }
    exports_1("insertAfter", insertAfter);
    return {
        setters: [],
        execute: function () {
        }
    };
});
//# sourceMappingURL=dom.js.map
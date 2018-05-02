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
    /**
     * Remove undefined fields from an object
     *
     * @param options An object to clean
     */
    function cleanOptions(options) {
        Object.keys(options).filter(function (key) { return options[key] === undefined; }).forEach(function (key) { return delete options[key]; });
    }
    exports_1("cleanOptions", cleanOptions);
    function updateLabel(input, label) {
        // the following is copied from the updateTextFields method
        // it is more efficient than updating all the inputs
        if (input.value && input.value.length > 0 || input.autofocus || input.hasAttribute("placeholder")) {
            label.classList.add("active");
        }
        else if (input.validity) {
            label.classList.toggle("active", input.validity.badInput === true);
        }
        else {
            label.classList.remove("active");
        }
    }
    exports_1("updateLabel", updateLabel);
    return {
        setters: [],
        execute: function () {
        }
    };
});
//# sourceMappingURL=util.js.map
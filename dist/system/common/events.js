System.register(["./constants"], function (exports_1, context_1) {
    "use strict";
    var constants_1;
    var __moduleName = context_1 && context_1.id;
    /**
     * Fire DOM event on an element
     * @param element The Element which the DOM event will be fired on
     * @param name The Event's name
     * @param data Addition data to attach to an event
     */
    function fireEvent(element, name, data) {
        if (data === void 0) { data = {}; }
        var event = new CustomEvent(name, {
            detail: data,
            bubbles: true
        });
        element.dispatchEvent(event);
        return event;
    }
    exports_1("fireEvent", fireEvent);
    /**
     * Fire DOM event on an element with the md-on prefix
     * @param element The Element which the DOM event will be fired on
     * @param name The Event's name, without md-on prefix
     * @param data Addition data to attach to an event
     */
    function fireMaterializeEvent(element, name, data) {
        if (data === void 0) { data = {}; }
        return fireEvent(element, "" + constants_1.constants.eventPrefix + name, data);
    }
    exports_1("fireMaterializeEvent", fireMaterializeEvent);
    return {
        setters: [
            function (constants_1_1) {
                constants_1 = constants_1_1;
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=events.js.map
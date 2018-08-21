"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
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
exports.fireEvent = fireEvent;
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
exports.fireMaterializeEvent = fireMaterializeEvent;
//# sourceMappingURL=events.js.map
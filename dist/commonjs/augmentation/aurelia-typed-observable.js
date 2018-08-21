"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_typed_observable_plugin_1 = require("aurelia-typed-observable-plugin");
aurelia_typed_observable_plugin_1.usePropertyTypeForBindable(true);
aurelia_typed_observable_plugin_1.usePropertyTypeForObservable(true);
aurelia_typed_observable_plugin_1.bindable.booleanMd = aurelia_typed_observable_plugin_1.createTypedBindable("booleanMd");
aurelia_typed_observable_plugin_1.coerceFunctions.booleanMd = function (val) {
    if (val === undefined) {
        return undefined;
    }
    else if (val === null) {
        return null;
    }
    else {
        return (val || val === "") && val !== "false" ? true : false;
    }
};
aurelia_typed_observable_plugin_1.bindable.numberMd = aurelia_typed_observable_plugin_1.createTypedBindable("numberMd");
aurelia_typed_observable_plugin_1.coerceFunctions.numberMd = function (val) {
    if (val === undefined || val === "" || val === "undefined" || val === "NaN") {
        return undefined;
    }
    else if (val === null || val === "null") {
        return null;
    }
    else {
        return Number(val);
    }
};
aurelia_typed_observable_plugin_1.bindable.stringMd = aurelia_typed_observable_plugin_1.createTypedBindable("stringMd");
aurelia_typed_observable_plugin_1.coerceFunctions.stringMd = function (val) {
    if (val === undefined) {
        return undefined;
    }
    else if (val === null) {
        return null;
    }
    else {
        return "" + val;
    }
};
// dummy export is needed to enforce loading order for requirejs
var Dummy = /** @class */ (function () {
    function Dummy() {
    }
    return Dummy;
}());
exports.Dummy = Dummy;
//# sourceMappingURL=aurelia-typed-observable.js.map
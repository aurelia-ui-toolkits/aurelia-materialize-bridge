System.register(["aurelia-typed-observable-plugin"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var aurelia_typed_observable_plugin_1;
    return {
        setters: [
            function (aurelia_typed_observable_plugin_1_1) {
                aurelia_typed_observable_plugin_1 = aurelia_typed_observable_plugin_1_1;
            }
        ],
        execute: function () {
            aurelia_typed_observable_plugin_1.usePropertyTypeForBindable(true);
            aurelia_typed_observable_plugin_1.usePropertyTypeForObservable(true);
            aurelia_typed_observable_plugin_1.bindable.booleanMd = aurelia_typed_observable_plugin_1.createTypedBindable("booleanMd");
            aurelia_typed_observable_plugin_1.coerceFunctions.booleanMd = function (val) { return (val || val === "") && val !== "false" ? true : false; };
            aurelia_typed_observable_plugin_1.bindable.numberMd = aurelia_typed_observable_plugin_1.createTypedBindable("numberMd");
            aurelia_typed_observable_plugin_1.coerceFunctions.numberMd = function (val) { return (val === undefined || val === null || val === "") ? undefined : Number(val); };
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
        }
    };
});
//# sourceMappingURL=aurelia-typed-observable.js.map
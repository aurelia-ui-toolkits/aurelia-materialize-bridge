System.register(["aurelia-router", "aurelia-framework", "aurelia-logging", "./common/events", "aurelia-validation", "./validation/validationRenderer", "aurelia-typed-observable-plugin", "./common/util", "./common/attributeManager"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var exportedNames_1 = {
        "Router": true,
        "customElement": true,
        "customAttribute": true,
        "autoinject": true,
        "bindingMode": true,
        "BindingEngine": true,
        "TaskQueue": true,
        "DOM": true,
        "getLogger": true,
        "Logger": true,
        "fireEvent": true,
        "fireMaterializeEvent": true,
        "ValidateResult": true,
        "MaterializeFormValidationRenderer": true,
        "bindable": true,
        "AttributeManager": true
    };
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default" && !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (aurelia_router_1_1) {
                exports_1({
                    "Router": aurelia_router_1_1["Router"]
                });
            },
            function (aurelia_framework_1_1) {
                exports_1({
                    "customElement": aurelia_framework_1_1["customElement"],
                    "customAttribute": aurelia_framework_1_1["customAttribute"],
                    "autoinject": aurelia_framework_1_1["autoinject"],
                    "bindingMode": aurelia_framework_1_1["bindingMode"],
                    "BindingEngine": aurelia_framework_1_1["BindingEngine"],
                    "TaskQueue": aurelia_framework_1_1["TaskQueue"],
                    "DOM": aurelia_framework_1_1["DOM"]
                });
            },
            function (aurelia_logging_1_1) {
                exports_1({
                    "getLogger": aurelia_logging_1_1["getLogger"],
                    "Logger": aurelia_logging_1_1["Logger"]
                });
            },
            function (events_1_1) {
                exports_1({
                    "fireEvent": events_1_1["fireEvent"],
                    "fireMaterializeEvent": events_1_1["fireMaterializeEvent"]
                });
            },
            function (aurelia_validation_1_1) {
                exports_1({
                    "ValidateResult": aurelia_validation_1_1["ValidateResult"]
                });
            },
            function (validationRenderer_1_1) {
                exports_1({
                    "MaterializeFormValidationRenderer": validationRenderer_1_1["MaterializeFormValidationRenderer"]
                });
            },
            function (aurelia_typed_observable_plugin_1_1) {
                exports_1({
                    "bindable": aurelia_typed_observable_plugin_1_1["bindable"]
                });
            },
            function (util_1_1) {
                exportStar_1(util_1_1);
            },
            function (attributeManager_1_1) {
                exports_1({
                    "AttributeManager": attributeManager_1_1["AttributeManager"]
                });
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=aurelia.js.map
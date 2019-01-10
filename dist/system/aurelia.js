System.register(["aurelia-router", "aurelia-framework", "aurelia-logging", "./common/events", "aurelia-validation", "./validation/validationRenderer", "aurelia-typed-observable-plugin", "./common/util", "./common/attribute-manager", "./common/colors-service"], function (exports_1, context_1) {
    "use strict";
    var ato;
    var __moduleName = context_1 && context_1.id;
    var exportedNames_1 = {
        "ato": true,
        "Router": true,
        "NavigationInstruction": true,
        "customElement": true,
        "customAttribute": true,
        "autoinject": true,
        "bindingMode": true,
        "BindingEngine": true,
        "TaskQueue": true,
        "DOM": true,
        "children": true,
        "bindable": true,
        "observable": true,
        "TemplatingEngine": true,
        "deprecated": true,
        "getLogger": true,
        "Logger": true,
        "fireEvent": true,
        "fireMaterializeEvent": true,
        "ValidateResult": true,
        "MaterializeFormValidationRenderer": true,
        "AttributeManager": true,
        "MdColorsService": true
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
                    "Router": aurelia_router_1_1["Router"],
                    "NavigationInstruction": aurelia_router_1_1["NavigationInstruction"]
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
                    "DOM": aurelia_framework_1_1["DOM"],
                    "children": aurelia_framework_1_1["children"],
                    "bindable": aurelia_framework_1_1["bindable"],
                    "observable": aurelia_framework_1_1["observable"],
                    "TemplatingEngine": aurelia_framework_1_1["TemplatingEngine"],
                    "deprecated": aurelia_framework_1_1["deprecated"]
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
            function (ato_1) {
                ato = ato_1;
            },
            function (util_1_1) {
                exportStar_1(util_1_1);
            },
            function (attribute_manager_1_1) {
                exports_1({
                    "AttributeManager": attribute_manager_1_1["AttributeManager"]
                });
            },
            function (colors_service_1_1) {
                exports_1({
                    "MdColorsService": colors_service_1_1["MdColorsService"]
                });
            }
        ],
        execute: function () {
            exports_1("ato", ato);
        }
    };
});
//# sourceMappingURL=aurelia.js.map
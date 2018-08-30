System.register(["./augmentation/element", "./augmentation/materialize", "./augmentation/aurelia-typed-observable", "./polyfills/append", "./polyfills/remove", "./polyfills/pad-start", "./config-builder", "./exports"], function (exports_1, context_1) {
    "use strict";
    var aurelia_typed_observable_1, config_builder_1, d;
    var __moduleName = context_1 && context_1.id;
    function configure(frameworkConfiguration, configCallback) {
        var builder = frameworkConfiguration.container.get(config_builder_1.ConfigBuilder);
        if (configCallback !== undefined && typeof (configCallback) === "function") {
            configCallback(builder);
        }
        if (builder.useGlobalResources) {
            frameworkConfiguration.globalResources(builder.globalResources);
        }
    }
    exports_1("configure", configure);
    var exportedNames_1 = {
        "configure": true
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
            function (_1) {
            },
            function (_2) {
            },
            function (aurelia_typed_observable_1_1) {
                aurelia_typed_observable_1 = aurelia_typed_observable_1_1;
            },
            function (_3) {
            },
            function (_4) {
            },
            function (_5) {
            },
            function (config_builder_1_1) {
                config_builder_1 = config_builder_1_1;
            },
            function (exports_2_1) {
                exportStar_1(exports_2_1);
            }
        ],
        execute: function () {
            // this is needed to enforce loading order for requirejs
            // otherwise typescript optimises imports and loads augmentation/aurelia-typed-observable after exports
            d = new aurelia_typed_observable_1.Dummy();
        }
    };
});
//# sourceMappingURL=index.js.map
System.register(["./augmentation/element", "./augmentation/materialize", "./config-builder", "./scrollfire/scrollfire-patch", "./common/polyfills", "aurelia-typed-observable-plugin", "./exports"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function applyPolyfills() {
        polyfills_1.polyfillElementClosest();
    }
    function configure(frameworkConfiguration, configCallback) {
        applyPolyfills();
        var builder = frameworkConfiguration.container.get(config_builder_1.ConfigBuilder);
        if (configCallback !== undefined && typeof (configCallback) === "function") {
            configCallback(builder);
        }
        if (builder.useGlobalResources) {
            frameworkConfiguration.globalResources(builder.globalResources);
        }
        if (builder.useScrollfirePatch) {
            new scrollfire_patch_1.ScrollfirePatch().patch();
        }
        aurelia_typed_observable_plugin_1.usePropertyTypeForBindable(true);
        aurelia_typed_observable_plugin_1.usePropertyTypeForObservable(true);
    }
    exports_1("configure", configure);
    var config_builder_1, scrollfire_patch_1, polyfills_1, aurelia_typed_observable_plugin_1;
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
            function (config_builder_1_1) {
                config_builder_1 = config_builder_1_1;
            },
            function (scrollfire_patch_1_1) {
                scrollfire_patch_1 = scrollfire_patch_1_1;
            },
            function (polyfills_1_1) {
                polyfills_1 = polyfills_1_1;
            },
            function (aurelia_typed_observable_plugin_1_1) {
                aurelia_typed_observable_plugin_1 = aurelia_typed_observable_plugin_1_1;
            },
            function (exports_2_1) {
                exportStar_1(exports_2_1);
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=index.js.map
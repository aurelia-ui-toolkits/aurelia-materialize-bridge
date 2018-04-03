// tslint:disable-next-line:no-reference
/// <reference path="materialize.d.ts" />
System.register(["./config-builder", "./scrollfire/scrollfire-patch", "./common/polyfills", "./exports"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function applyPolyfills() {
        polyfills_1.polyfillElementClosest();
    }
    function configure(frameworkConfiguration, configCallback) {
        applyPolyfills();
        const builder = frameworkConfiguration.container.get(config_builder_1.ConfigBuilder);
        if (configCallback !== undefined && typeof (configCallback) === "function") {
            configCallback(builder);
        }
        if (builder.useGlobalResources) {
            frameworkConfiguration.globalResources(builder.globalResources);
        }
        if (builder.useScrollfirePatch) {
            new scrollfire_patch_1.ScrollfirePatch().patch();
        }
    }
    exports_1("configure", configure);
    var config_builder_1, scrollfire_patch_1, polyfills_1;
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
            function (config_builder_1_1) {
                config_builder_1 = config_builder_1_1;
            },
            function (scrollfire_patch_1_1) {
                scrollfire_patch_1 = scrollfire_patch_1_1;
            },
            function (polyfills_1_1) {
                polyfills_1 = polyfills_1_1;
            },
            function (exports_2_1) {
                exportStar_1(exports_2_1);
            }
        ],
        execute: function () {
        }
    };
});

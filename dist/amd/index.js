define(["require", "exports", "tslib", "./config-builder", "./scrollfire/scrollfire-patch", "./common/polyfills", "aurelia-typed-observable-plugin", "./exports", "./augmentation/element", "./augmentation/materialize"], function (require, exports, tslib_1, config_builder_1, scrollfire_patch_1, polyfills_1, aurelia_typed_observable_plugin_1, exports_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    exports.configure = configure;
    // build-index-remove start
    tslib_1.__exportStar(exports_1, exports);
});
// build-index-remove end

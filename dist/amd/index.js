define(["require", "exports", "./config-builder", "./scrollfire/scrollfire-patch", "./common/polyfills", "./exports"], function (require, exports, config_builder_1, scrollfire_patch_1, polyfills_1, exports_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
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
    exports.configure = configure;
    // build-index-remove start
    __export(exports_1);
});
// build-index-remove end

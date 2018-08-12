define(["require", "exports", "tslib", "./config-builder", "./exports", "./augmentation/element", "./augmentation/materialize", "./augmentation/aurelia-typed-observable", "./polyfills/append", "./polyfills/remove"], function (require, exports, tslib_1, config_builder_1, exports_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(frameworkConfiguration, configCallback) {
        var builder = frameworkConfiguration.container.get(config_builder_1.ConfigBuilder);
        if (configCallback !== undefined && typeof (configCallback) === "function") {
            configCallback(builder);
        }
        if (builder.useGlobalResources) {
            frameworkConfiguration.globalResources(builder.globalResources);
        }
    }
    exports.configure = configure;
    // build-index-remove start
    tslib_1.__exportStar(exports_1, exports);
});
// build-index-remove end
//# sourceMappingURL=index.js.map
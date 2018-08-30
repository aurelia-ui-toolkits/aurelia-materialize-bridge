define(["require", "exports", "tslib", "./augmentation/aurelia-typed-observable", "./config-builder", "./exports", "./augmentation/element", "./augmentation/materialize", "./polyfills/append", "./polyfills/remove", "./polyfills/pad-start"], function (require, exports, tslib_1, aurelia_typed_observable_1, config_builder_1, exports_1) {
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
    // this is needed to enforce loading order for requirejs
    // otherwise typescript optimises imports and loads augmentation/aurelia-typed-observable after exports
    var d = new aurelia_typed_observable_1.Dummy();
    // build-index-remove start
    tslib_1.__exportStar(exports_1, exports);
});
// build-index-remove end
//# sourceMappingURL=index.js.map
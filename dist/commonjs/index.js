"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// the following two imports are needed for consumer TS projects
// without them types will not be found
require("./augmentation/element");
require("./augmentation/materialize");
require("./augmentation/aurelia-typed-observable");
var config_builder_1 = require("./config-builder");
var scrollfire_patch_1 = require("./scrollfire/scrollfire-patch");
var polyfills_1 = require("./common/polyfills");
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
}
exports.configure = configure;
// build-index-remove start
tslib_1.__exportStar(require("./exports"), exports);
// build-index-remove end
//# sourceMappingURL=index.js.map
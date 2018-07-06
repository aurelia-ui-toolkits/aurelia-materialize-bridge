"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// the following two imports are needed for consumer TS projects
// without them types will not be found
require("./augmentation/element");
require("./augmentation/materialize");
require("./augmentation/aurelia-typed-observable");
var config_builder_1 = require("./config-builder");
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
tslib_1.__exportStar(require("./exports"), exports);
// build-index-remove end
function remove() {
    if (this.parentNode) {
        this.parentNode.removeChild(this);
    }
}
// polyfill remove for IE11
(function () {
    if (!Element.prototype.remove) {
        Element.prototype.remove = remove;
    }
    if (Text && !Text.prototype.remove) {
        Text.prototype.remove = remove;
    }
})();
//# sourceMappingURL=index.js.map
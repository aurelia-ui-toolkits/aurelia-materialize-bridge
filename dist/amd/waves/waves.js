define(["require", "exports", "tslib", "aurelia-framework", "../common/attributeManager", "../common/attributes", "../config-builder"], function (require, exports, tslib_1, aurelia_framework_1, attributeManager_1, attributes_1, config_builder_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdWaves = /** @class */ (function () {
        function MdWaves(element, configBuilder) {
            this.element = element;
            this.configBuilder = configBuilder;
            this.block = false;
            this.circle = false;
            this.attributeManager = new attributeManager_1.AttributeManager(this.element);
        }
        MdWaves.prototype.attached = function () {
            var classes = ["waves-effect"];
            if (attributes_1.getBooleanFromAttributeValue(this.block)) {
                classes.push("waves-block");
            }
            if (attributes_1.getBooleanFromAttributeValue(this.circle)) {
                classes.push("waves-circle");
            }
            if (this.color) {
                classes.push("waves-" + this.color);
            }
            this.attributeManager.addClasses(classes);
            if (!this.configBuilder.noWavesAttach) {
                Waves.attach(this.element);
            }
        };
        MdWaves.prototype.detached = function () {
            var classes = ["waves-effect", "waves-block"];
            if (this.color) {
                classes.push("waves-" + this.color);
            }
            this.attributeManager.removeClasses(classes);
        };
        tslib_1.__decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Object)
        ], MdWaves.prototype, "block", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Object)
        ], MdWaves.prototype, "circle", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", String)
        ], MdWaves.prototype, "color", void 0);
        MdWaves = tslib_1.__decorate([
            aurelia_framework_1.customAttribute("md-waves"),
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element, config_builder_1.ConfigBuilder])
        ], MdWaves);
        return MdWaves;
    }());
    exports.MdWaves = MdWaves;
});
//# sourceMappingURL=waves.js.map
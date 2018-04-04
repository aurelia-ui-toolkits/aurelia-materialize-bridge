System.register(["tslib", "aurelia-framework"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, aurelia_framework_1, MdProgress;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }
        ],
        execute: function () {
            MdProgress = /** @class */ (function () {
                function MdProgress(element) {
                    this.element = element;
                    this.mdColor = null;
                    this.mdPixelSize = null;
                    this.mdSize = "big";
                    this.mdType = "linear";
                    this.mdValue = null;
                }
                MdProgress.prototype.mdPixelSizeChanged = function (newValue) {
                    if (this.wrapper) {
                        newValue = (newValue === null || newValue === "" || typeof newValue === "number" && isNaN(newValue)) ? "" : newValue + "px";
                        this.wrapper.style.height = newValue;
                        this.wrapper.style.width = newValue;
                    }
                };
                MdProgress.prototype.bind = function () {
                    // DO NOT REMOVE!!!
                    // This disables property changed callbacks for any bindable properties during initialization
                    // Prevents mdPixelSize getting cleared by the mdSizeChanged event during binding
                };
                MdProgress.prototype.attached = function () {
                    this.mdPixelSizeChanged(this.mdPixelSize);
                };
                MdProgress.prototype.mdSizeChanged = function (newValue) {
                    this.mdPixelSize = null;
                };
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", String)
                ], MdProgress.prototype, "mdColor", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
                    tslib_1.__metadata("design:type", Object)
                ], MdProgress.prototype, "mdPixelSize", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", String)
                ], MdProgress.prototype, "mdSize", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", String)
                ], MdProgress.prototype, "mdType", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
                    tslib_1.__metadata("design:type", Number)
                ], MdProgress.prototype, "mdValue", void 0);
                MdProgress = tslib_1.__decorate([
                    aurelia_framework_1.customElement("md-progress"),
                    aurelia_framework_1.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], MdProgress);
                return MdProgress;
            }());
            exports_1("MdProgress", MdProgress);
        }
    };
});

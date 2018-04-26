System.register(["tslib", "aurelia-framework", "../common/events", "../common/attributes"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, aurelia_framework_1, events_1, attributes_1, MdFileInput;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (events_1_1) {
                events_1 = events_1_1;
            },
            function (attributes_1_1) {
                attributes_1 = attributes_1_1;
            }
        ],
        execute: function () {
            MdFileInput = /** @class */ (function () {
                function MdFileInput(element) {
                    this.element = element;
                    this.mdCaption = "File";
                    this.mdMultiple = false;
                    this.disabled = false;
                    this.mdReadonly = false;
                    this.suspendUpdate = false;
                    this.handleChangeFromNativeInput = this.handleChangeFromNativeInput.bind(this);
                }
                MdFileInput.prototype.attached = function () {
                    this.mdMultiple = attributes_1.getBooleanFromAttributeValue(this.mdMultiple);
                    $(this.filePath).on("change", this.handleChangeFromNativeInput);
                };
                MdFileInput.prototype.detached = function () {
                    $(this.element).off("change", this.handleChangeFromNativeInput);
                };
                MdFileInput.prototype.handleChangeFromNativeInput = function () {
                    if (!this.suspendUpdate) {
                        this.suspendUpdate = true;
                        events_1.fireEvent(this.filePath, "change", { files: this.files });
                        events_1.fireMaterializeEvent(this.filePath, "change", { files: this.files });
                        this.suspendUpdate = false;
                    }
                };
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", Object)
                ], MdFileInput.prototype, "mdCaption", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", Object)
                ], MdFileInput.prototype, "mdMultiple", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
                    tslib_1.__metadata("design:type", Object)
                ], MdFileInput.prototype, "mdLabelValue", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", Object)
                ], MdFileInput.prototype, "disabled", void 0);
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", Object)
                ], MdFileInput.prototype, "mdReadonly", void 0);
                MdFileInput = tslib_1.__decorate([
                    aurelia_framework_1.customElement("md-file"),
                    aurelia_framework_1.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], MdFileInput);
                return MdFileInput;
            }());
            exports_1("MdFileInput", MdFileInput);
        }
    };
});
//# sourceMappingURL=file.js.map
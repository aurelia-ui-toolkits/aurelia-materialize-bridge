define(["require", "exports", "tslib", "aurelia-framework", "../common/events", "../common/attributes"], function (require, exports, tslib_1, aurelia_framework_1, events_1, attributes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdFileInput = /** @class */ (function () {
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
    exports.MdFileInput = MdFileInput;
});
//# sourceMappingURL=file.js.map
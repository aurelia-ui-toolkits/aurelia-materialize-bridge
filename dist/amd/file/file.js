var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../common/events", "../common/attributes"], function (require, exports, aurelia_framework_1, events_1, attributes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let MdFileInput = class MdFileInput {
        constructor(element) {
            this.element = element;
            this.mdCaption = "File";
            this.mdMultiple = false;
            this.disabled = false;
            this.mdReadonly = false;
            this.suspendUpdate = false;
            this.handleChangeFromNativeInput = this.handleChangeFromNativeInput.bind(this);
        }
        attached() {
            this.mdMultiple = attributes_1.getBooleanFromAttributeValue(this.mdMultiple);
            $(this.filePath).on("change", this.handleChangeFromNativeInput);
        }
        detached() {
            $(this.element).off("change", this.handleChangeFromNativeInput);
        }
        handleChangeFromNativeInput() {
            if (!this.suspendUpdate) {
                this.suspendUpdate = true;
                events_1.fireEvent(this.filePath, "change", { files: this.files });
                events_1.fireMaterializeEvent(this.filePath, "change", { files: this.files });
                this.suspendUpdate = false;
            }
        }
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], MdFileInput.prototype, "mdCaption", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], MdFileInput.prototype, "mdMultiple", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], MdFileInput.prototype, "mdLabelValue", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], MdFileInput.prototype, "disabled", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], MdFileInput.prototype, "mdReadonly", void 0);
    MdFileInput = __decorate([
        aurelia_framework_1.customElement("md-file"),
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [Element])
    ], MdFileInput);
    exports.MdFileInput = MdFileInput;
});

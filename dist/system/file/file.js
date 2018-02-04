System.register(["aurelia-framework", "../common/events", "../common/attributes"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, events_1, attributes_1, MdFileInput;
    return {
        setters: [
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
            MdFileInput = class MdFileInput {
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
                aurelia_framework_1.bindable
            ], MdFileInput.prototype, "mdCaption", void 0);
            __decorate([
                aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
            ], MdFileInput.prototype, "mdMultiple", void 0);
            __decorate([
                aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay })
            ], MdFileInput.prototype, "mdLabelValue", void 0);
            __decorate([
                aurelia_framework_1.bindable
            ], MdFileInput.prototype, "disabled", void 0);
            __decorate([
                aurelia_framework_1.bindable
            ], MdFileInput.prototype, "mdReadonly", void 0);
            MdFileInput = __decorate([
                aurelia_framework_1.customElement("md-file"),
                aurelia_framework_1.autoinject
            ], MdFileInput);
            exports_1("MdFileInput", MdFileInput);
        }
    };
});

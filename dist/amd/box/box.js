var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../common/attributeManager"], function (require, exports, aurelia_framework_1, attributeManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let MdBox = class MdBox {
        constructor(element) {
            this.element = element;
            this.element = element;
            this.attributeManager = new attributeManager_1.AttributeManager(this.element);
        }
        attached() {
            this.attributeManager.addClasses("materialboxed");
            if (this.caption) {
                this.attributeManager.addAttributes({ "data-caption": this.caption });
            }
            // FIXME:0 throws "Uncaught TypeError: Cannot read property "css" of undefined", but so does the original
            $(this.element).materialbox();
        }
        detached() {
            this.attributeManager.removeAttributes("data-caption");
            this.attributeManager.removeClasses("materialboxed");
        }
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], MdBox.prototype, "caption", void 0);
    MdBox = __decorate([
        aurelia_framework_1.customAttribute("md-box"),
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [Element])
    ], MdBox);
    exports.MdBox = MdBox;
});

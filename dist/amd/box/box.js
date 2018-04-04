define(["require", "exports", "tslib", "aurelia-framework", "../common/attributeManager"], function (require, exports, tslib_1, aurelia_framework_1, attributeManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdBox = /** @class */ (function () {
        function MdBox(element) {
            this.element = element;
            this.element = element;
            this.attributeManager = new attributeManager_1.AttributeManager(this.element);
        }
        MdBox.prototype.attached = function () {
            this.attributeManager.addClasses("materialboxed");
            if (this.caption) {
                this.attributeManager.addAttributes({ "data-caption": this.caption });
            }
            // FIXME:0 throws "Uncaught TypeError: Cannot read property "css" of undefined", but so does the original
            $(this.element).materialbox();
        };
        MdBox.prototype.detached = function () {
            this.attributeManager.removeAttributes("data-caption");
            this.attributeManager.removeClasses("materialboxed");
        };
        tslib_1.__decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Object)
        ], MdBox.prototype, "caption", void 0);
        MdBox = tslib_1.__decorate([
            aurelia_framework_1.customAttribute("md-box"),
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element])
        ], MdBox);
        return MdBox;
    }());
    exports.MdBox = MdBox;
});

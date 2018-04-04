define(["require", "exports", "tslib", "aurelia-framework", "../common/attributeManager", "../common/attributes"], function (require, exports, tslib_1, aurelia_framework_1, attributeManager_1, attributes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdCheckbox = /** @class */ (function () {
        function MdCheckbox(element) {
            this.element = element;
            this.mdReadonly = false;
            this.controlId = "md-checkbox-" + MdCheckbox_1.id++;
        }
        MdCheckbox_1 = MdCheckbox;
        MdCheckbox.prototype.mdDisabledChanged = function (newValue) {
            if (this.checkbox) {
                this.checkbox.disabled = !!newValue;
            }
        };
        MdCheckbox.prototype.mdReadonlyChanged = function () {
            if (!this.checkbox) {
                return;
            }
            if (this.mdReadonly) {
                this.checkbox.addEventListener("change", this.preventChange);
            }
            else {
                this.checkbox.removeEventListener("change", this.preventChange);
            }
        };
        MdCheckbox.prototype.attached = function () {
            this.attributeManager = new attributeManager_1.AttributeManager(this.checkbox);
            if (attributes_1.getBooleanFromAttributeValue(this.mdFilledIn)) {
                this.attributeManager.addClasses("filled-in");
            }
            if (this.mdChecked === null) {
                this.checkbox.indeterminate = true;
            }
            else {
                this.checkbox.indeterminate = false;
            }
            if (attributes_1.getBooleanFromAttributeValue(this.mdDisabled)) {
                this.checkbox.disabled = true;
            }
            this.mdReadonly = attributes_1.getBooleanFromAttributeValue(this.mdReadonly);
            this.mdReadonlyChanged();
        };
        MdCheckbox.prototype.detached = function () {
            this.attributeManager.removeClasses(["filled-in", "disabled"]);
        };
        // it is called with an element as this
        MdCheckbox.prototype.preventChange = function () {
            this.checked = !this.checked;
        };
        MdCheckbox.id = 0;
        tslib_1.__decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            tslib_1.__metadata("design:type", Object)
        ], MdCheckbox.prototype, "mdChecked", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", Object)
        ], MdCheckbox.prototype, "mdDisabled", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", Boolean)
        ], MdCheckbox.prototype, "mdReadonly", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", Object)
        ], MdCheckbox.prototype, "mdFilledIn", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", Function)
        ], MdCheckbox.prototype, "mdMatcher", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", Object)
        ], MdCheckbox.prototype, "mdModel", void 0);
        MdCheckbox = MdCheckbox_1 = tslib_1.__decorate([
            aurelia_framework_1.customElement("md-checkbox"),
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element])
        ], MdCheckbox);
        return MdCheckbox;
        var MdCheckbox_1;
    }());
    exports.MdCheckbox = MdCheckbox;
});

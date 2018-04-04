import * as tslib_1 from "tslib";
import { autoinject, bindable, bindingMode, customElement } from "aurelia-framework";
import { AttributeManager } from "../common/attributeManager";
import { getBooleanFromAttributeValue } from "../common/attributes";
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
        this.attributeManager = new AttributeManager(this.checkbox);
        if (getBooleanFromAttributeValue(this.mdFilledIn)) {
            this.attributeManager.addClasses("filled-in");
        }
        if (this.mdChecked === null) {
            this.checkbox.indeterminate = true;
        }
        else {
            this.checkbox.indeterminate = false;
        }
        if (getBooleanFromAttributeValue(this.mdDisabled)) {
            this.checkbox.disabled = true;
        }
        this.mdReadonly = getBooleanFromAttributeValue(this.mdReadonly);
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
        bindable({ defaultBindingMode: bindingMode.twoWay }),
        tslib_1.__metadata("design:type", Object)
    ], MdCheckbox.prototype, "mdChecked", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdCheckbox.prototype, "mdDisabled", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Boolean)
    ], MdCheckbox.prototype, "mdReadonly", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdCheckbox.prototype, "mdFilledIn", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Function)
    ], MdCheckbox.prototype, "mdMatcher", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdCheckbox.prototype, "mdModel", void 0);
    MdCheckbox = MdCheckbox_1 = tslib_1.__decorate([
        customElement("md-checkbox"),
        autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdCheckbox);
    return MdCheckbox;
    var MdCheckbox_1;
}());
export { MdCheckbox };

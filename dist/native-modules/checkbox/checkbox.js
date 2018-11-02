import * as tslib_1 from "tslib";
import * as au from "../aurelia";
var MdCheckbox = /** @class */ (function () {
    function MdCheckbox(element) {
        this.element = element;
        this.readonly = false;
        this.controlId = "md-checkbox-" + MdCheckbox_1.id++;
    }
    MdCheckbox_1 = MdCheckbox;
    MdCheckbox.prototype.disabledChanged = function (newValue) {
        if (this.checkbox) {
            this.checkbox.disabled = !!newValue;
        }
    };
    MdCheckbox.prototype.readonlyChanged = function () {
        if (!this.checkbox) {
            return;
        }
        if (this.readonly) {
            this.checkbox.addEventListener("change", this.preventChange);
        }
        else {
            this.checkbox.removeEventListener("change", this.preventChange);
        }
    };
    MdCheckbox.prototype.attached = function () {
        this.attributeManager = new au.AttributeManager(this.checkbox);
        if (this.filledIn) {
            this.attributeManager.addClasses("filled-in");
        }
        if (this.checked === null) {
            this.checkbox.indeterminate = true;
        }
        else {
            this.checkbox.indeterminate = false;
        }
        if (this.disabled) {
            this.checkbox.disabled = true;
        }
        this.readonlyChanged();
    };
    MdCheckbox.prototype.detached = function () {
        this.attributeManager.removeClasses(["filled-in", "disabled"]);
    };
    // it is called with an element as this
    MdCheckbox.prototype.preventChange = function () {
        this.checked = !this.checked;
    };
    var MdCheckbox_1;
    MdCheckbox.id = 0;
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.twoWay }),
        tslib_1.__metadata("design:type", Object)
    ], MdCheckbox.prototype, "checked", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], MdCheckbox.prototype, "disabled", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], MdCheckbox.prototype, "readonly", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], MdCheckbox.prototype, "filledIn", void 0);
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", Function)
    ], MdCheckbox.prototype, "matcher", void 0);
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdCheckbox.prototype, "model", void 0);
    MdCheckbox = MdCheckbox_1 = tslib_1.__decorate([
        au.customElement("md-checkbox"),
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdCheckbox);
    return MdCheckbox;
}());
export { MdCheckbox };
//# sourceMappingURL=checkbox.js.map
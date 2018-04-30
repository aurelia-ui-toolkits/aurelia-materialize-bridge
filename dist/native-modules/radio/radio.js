import * as tslib_1 from "tslib";
import * as au from "../aurelia";
var MdRadio = /** @class */ (function () {
    function MdRadio(element) {
        this.element = element;
        this.mdDisabled = false;
        this.mdReadonly = false;
        this.mdGap = false;
        this.mdName = "";
        this.mdValue = "";
        this.controlId = "md-radio-" + MdRadio_1.id++;
    }
    MdRadio_1 = MdRadio;
    MdRadio.prototype.mdDisabledChanged = function (newValue) {
        if (this.radio) {
            this.radio.disabled = newValue;
        }
    };
    MdRadio.prototype.attached = function () {
        this.attributeManager = new au.AttributeManager(this.radio);
        if (this.mdGap) {
            this.attributeManager.addClasses("with-gap");
        }
        if (this.mdDisabled) {
            this.radio.disabled = true;
        }
    };
    MdRadio.prototype.detached = function () {
        this.attributeManager.removeClasses(["with-gap", "disabled"]);
    };
    MdRadio.id = 0;
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.twoWay }),
        tslib_1.__metadata("design:type", Object)
    ], MdRadio.prototype, "mdChecked", void 0);
    tslib_1.__decorate([
        au.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], MdRadio.prototype, "mdDisabled", void 0);
    tslib_1.__decorate([
        au.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], MdRadio.prototype, "mdReadonly", void 0);
    tslib_1.__decorate([
        au.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], MdRadio.prototype, "mdGap", void 0);
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdRadio.prototype, "mdModel", void 0);
    tslib_1.__decorate([
        au.bindable.stringMd,
        tslib_1.__metadata("design:type", String)
    ], MdRadio.prototype, "mdName", void 0);
    tslib_1.__decorate([
        au.bindable.stringMd,
        tslib_1.__metadata("design:type", String)
    ], MdRadio.prototype, "mdValue", void 0);
    MdRadio = MdRadio_1 = tslib_1.__decorate([
        au.customElement("md-radio"),
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdRadio);
    return MdRadio;
    var MdRadio_1;
}());
export { MdRadio };
//# sourceMappingURL=radio.js.map
import * as tslib_1 from "tslib";
import { bindable, customElement, bindingMode, autoinject } from "aurelia-framework";
import { AttributeManager } from "../common/attributeManager";
import { getBooleanFromAttributeValue } from "../common/attributes";
var MdRadio = /** @class */ (function () {
    function MdRadio(element) {
        this.element = element;
        this.mdDisabled = false;
        this.mdReadonly = false;
        this.mdGap = false;
        this.mdName = "";
        this.mdValue = "";
        this.controlId = "md-radio-" + MdRadio_1.id++;
        // this.handleChange = this.handleChange.bind(this);
    }
    MdRadio_1 = MdRadio;
    MdRadio.prototype.mdDisabledChanged = function (newValue) {
        if (this.radio) {
            this.radio.disabled = !!newValue;
        }
    };
    MdRadio.prototype.attached = function () {
        this.attributeManager = new AttributeManager(this.radio);
        if (getBooleanFromAttributeValue(this.mdGap)) {
            this.attributeManager.addClasses("with-gap");
        }
        if (getBooleanFromAttributeValue(this.mdDisabled)) {
            this.radio.disabled = true;
        }
        this.mdReadonly = getBooleanFromAttributeValue(this.mdReadonly);
    };
    MdRadio.prototype.detached = function () {
        this.attributeManager.removeClasses(["with-gap", "disabled"]);
    };
    MdRadio.id = 0;
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.twoWay }),
        tslib_1.__metadata("design:type", Object)
    ], MdRadio.prototype, "mdChecked", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdRadio.prototype, "mdDisabled", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdRadio.prototype, "mdReadonly", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdRadio.prototype, "mdGap", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdRadio.prototype, "mdModel", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", String)
    ], MdRadio.prototype, "mdName", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", String)
    ], MdRadio.prototype, "mdValue", void 0);
    MdRadio = MdRadio_1 = tslib_1.__decorate([
        customElement("md-radio"),
        autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdRadio);
    return MdRadio;
    var MdRadio_1;
}());
export { MdRadio };
//# sourceMappingURL=radio.js.map
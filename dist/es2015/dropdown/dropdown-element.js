import * as tslib_1 from "tslib";
import { bindable, customElement, bindingMode, autoinject } from "aurelia-framework";
import { getBooleanFromAttributeValue } from "../common/attributes";
var MdDropdownElement = /** @class */ (function () {
    function MdDropdownElement(element) {
        this.element = element;
        this.alignment = "left";
        this.belowOrigin = false;
        this.constrainWidth = true;
        this.gutter = 0;
        this.hover = false;
        this.inDuration = 300;
        this.outDuration = 225;
        this.stopPropagation = false;
        this.controlId = "md-dropdown-" + MdDropdownElement_1.id++;
    }
    MdDropdownElement_1 = MdDropdownElement;
    MdDropdownElement.prototype.attached = function () {
        $(this.element).dropdown({
            alignment: this.alignment,
            belowOrigin: getBooleanFromAttributeValue(this.belowOrigin),
            constrain_width: getBooleanFromAttributeValue(this.constrainWidth),
            gutter: parseInt(this.gutter.toString(), 10),
            hover: getBooleanFromAttributeValue(this.hover),
            inDuration: parseInt(this.inDuration.toString(), 10),
            outDuration: parseInt(this.outDuration.toString(), 10),
            stopPropagation: getBooleanFromAttributeValue(this.stopPropagation)
        });
    };
    MdDropdownElement.id = 0;
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", String)
    ], MdDropdownElement.prototype, "alignment", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdDropdownElement.prototype, "belowOrigin", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdDropdownElement.prototype, "constrainWidth", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Number)
    ], MdDropdownElement.prototype, "gutter", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdDropdownElement.prototype, "hover", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", String)
    ], MdDropdownElement.prototype, "mdTitle", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdDropdownElement.prototype, "inDuration", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdDropdownElement.prototype, "outDuration", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdDropdownElement.prototype, "stopPropagation", void 0);
    MdDropdownElement = MdDropdownElement_1 = tslib_1.__decorate([
        customElement("md-dropdown"),
        autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdDropdownElement);
    return MdDropdownElement;
    var MdDropdownElement_1;
}());
export { MdDropdownElement };

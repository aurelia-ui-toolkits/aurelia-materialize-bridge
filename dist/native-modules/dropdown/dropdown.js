import * as tslib_1 from "tslib";
import { bindable, customAttribute, bindingMode, autoinject } from "aurelia-framework";
import { AttributeManager } from "../common/attributeManager";
import { getBooleanFromAttributeValue } from "../common/attributes";
var MdDropdown = /** @class */ (function () {
    function MdDropdown(element) {
        this.element = element;
        this.activates = "";
        this.ref = null;
        this.alignment = "left";
        this.belowOrigin = false;
        this.constrainWidth = true;
        this.gutter = 0;
        this.hover = false;
        this.inDuration = 300;
        this.outDuration = 225;
        this.stopPropagation = false;
        this.attributeManager = new AttributeManager(this.element);
    }
    MdDropdown_1 = MdDropdown;
    MdDropdown.prototype.attached = function () {
        this.handleActivateElement();
        this.contentAttributeManager = new AttributeManager(document.getElementById(this.activates));
        this.attributeManager.addClasses("dropdown-button");
        this.contentAttributeManager.addClasses("dropdown-content");
        // this.attributeManager.addAttributes({ 'data-activates': this.activates });
        $(this.element).dropdown({
            alignment: this.alignment,
            belowOrigin: getBooleanFromAttributeValue(this.belowOrigin),
            constrain_width: getBooleanFromAttributeValue(this.constrainWidth),
            constrainWidth: getBooleanFromAttributeValue(this.constrainWidth),
            gutter: parseInt(this.gutter.toString(), 10),
            hover: getBooleanFromAttributeValue(this.hover),
            inDuration: parseInt(this.inDuration.toString(), 10),
            outDuration: parseInt(this.outDuration.toString(), 10),
            stopPropagation: getBooleanFromAttributeValue(this.stopPropagation)
        });
    };
    MdDropdown.prototype.detached = function () {
        this.attributeManager.removeAttributes("data-activates");
        this.attributeManager.removeClasses("dropdown-button");
        this.contentAttributeManager.removeClasses("dropdown-content");
    };
    MdDropdown.prototype.open = function () {
        $(this.element).dropdown("open");
    };
    MdDropdown.prototype.close = function () {
        $(this.element).dropdown("close");
    };
    MdDropdown.prototype.handleActivateElement = function () {
        if (this.ref) {
            var id = this.ref.getAttribute("id");
            if (!id) {
                id = "md-dropdown-" + MdDropdown_1.elementId++;
                this.ref.setAttribute("id", id);
                this.activates = id;
            }
            this.id = id;
        }
        this.attributeManager.addAttributes({ "data-activates": this.activates });
    };
    MdDropdown.elementId = 0;
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdDropdown.prototype, "activates", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Element)
    ], MdDropdown.prototype, "ref", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", String)
    ], MdDropdown.prototype, "alignment", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdDropdown.prototype, "belowOrigin", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdDropdown.prototype, "constrainWidth", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdDropdown.prototype, "gutter", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdDropdown.prototype, "hover", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", String)
    ], MdDropdown.prototype, "mdTitle", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdDropdown.prototype, "inDuration", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdDropdown.prototype, "outDuration", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdDropdown.prototype, "stopPropagation", void 0);
    MdDropdown = MdDropdown_1 = tslib_1.__decorate([
        customAttribute("md-dropdown"),
        autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdDropdown);
    return MdDropdown;
    var MdDropdown_1;
}());
export { MdDropdown };
//# sourceMappingURL=dropdown.js.map
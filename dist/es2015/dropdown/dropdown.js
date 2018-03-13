var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, customAttribute, bindingMode, autoinject } from "aurelia-framework";
import { AttributeManager } from "../common/attributeManager";
import { getBooleanFromAttributeValue } from "../common/attributes";
let MdDropdown = MdDropdown_1 = class MdDropdown {
    constructor(element) {
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
    attached() {
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
    }
    detached() {
        this.attributeManager.removeAttributes("data-activates");
        this.attributeManager.removeClasses("dropdown-button");
        this.contentAttributeManager.removeClasses("dropdown-content");
    }
    open() {
        $(this.element).dropdown("open");
    }
    close() {
        $(this.element).dropdown("close");
    }
    handleActivateElement() {
        if (this.ref) {
            let id = this.ref.getAttribute("id");
            if (!id) {
                id = `md-dropdown-${MdDropdown_1.elementId++}`;
                this.ref.setAttribute("id", id);
                this.activates = id;
            }
            this.id = id;
        }
        this.attributeManager.addAttributes({ "data-activates": this.activates });
    }
};
MdDropdown.elementId = 0;
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdDropdown.prototype, "activates", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Element)
], MdDropdown.prototype, "ref", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", String)
], MdDropdown.prototype, "alignment", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdDropdown.prototype, "belowOrigin", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdDropdown.prototype, "constrainWidth", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdDropdown.prototype, "gutter", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdDropdown.prototype, "hover", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", String)
], MdDropdown.prototype, "mdTitle", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdDropdown.prototype, "inDuration", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdDropdown.prototype, "outDuration", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdDropdown.prototype, "stopPropagation", void 0);
MdDropdown = MdDropdown_1 = __decorate([
    customAttribute("md-dropdown"),
    autoinject,
    __metadata("design:paramtypes", [Element])
], MdDropdown);
export { MdDropdown };
var MdDropdown_1;

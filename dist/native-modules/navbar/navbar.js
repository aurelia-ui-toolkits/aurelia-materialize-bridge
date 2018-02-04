var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, customElement, autoinject, bindingMode } from "aurelia-framework";
import { getBooleanFromAttributeValue } from "../common/attributes";
import { AttributeManager } from "../common/attributeManager";
let MdNavbar = class MdNavbar {
    constructor(element) {
        this.element = element;
    }
    attached() {
        this.fixedAttributeManager = new AttributeManager(this.fixedAnchor);
        this.navAttributeManager = new AttributeManager(this.nav);
        if (getBooleanFromAttributeValue(this.mdFixed)) {
            this.fixedAttributeManager.addClasses("navbar-fixed");
        }
        if (getBooleanFromAttributeValue(this.mdAutoHeight)) {
            this.navAttributeManager.addClasses("md-auto-height");
        }
        if (getBooleanFromAttributeValue(this.mdExtended)) {
            this.navAttributeManager.addClasses("nav-extended");
        }
    }
    detached() {
        if (getBooleanFromAttributeValue(this.mdFixed)) {
            this.fixedAttributeManager.removeClasses("navbar-fixed");
        }
        if (getBooleanFromAttributeValue(this.mdAutoHeight)) {
            this.navAttributeManager.removeClasses("md-auto-height");
        }
        if (getBooleanFromAttributeValue(this.mdExtended)) {
            this.navAttributeManager.removeClasses("nav-extended");
        }
    }
};
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdNavbar.prototype, "mdExtended", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdNavbar.prototype, "mdFixed", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdNavbar.prototype, "mdAutoHeight", void 0);
MdNavbar = __decorate([
    customElement("md-navbar"),
    autoinject,
    __metadata("design:paramtypes", [Element])
], MdNavbar);
export { MdNavbar };

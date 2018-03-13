var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { autoinject, bindable, bindingMode, customElement } from "aurelia-framework";
import { getBooleanFromAttributeValue } from "../common/attributes";
let MdCard = class MdCard {
    constructor(element) {
        this.element = element;
        this.mdImage = null;
        this.mdReveal = false;
        this.mdAction = false;
        this.mdStickyAction = false;
        this.mdSize = "";
    }
    attached() {
        this.mdHorizontal = getBooleanFromAttributeValue(this.mdHorizontal);
        this.mdReveal = getBooleanFromAttributeValue(this.mdReveal);
        this.mdAction = getBooleanFromAttributeValue(this.mdAction);
        this.mdStickyAction = getBooleanFromAttributeValue(this.mdStickyAction);
    }
};
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdCard.prototype, "mdHorizontal", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdCard.prototype, "mdImage", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdCard.prototype, "mdReveal", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdCard.prototype, "mdAction", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdCard.prototype, "mdStickyAction", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneWay }),
    __metadata("design:type", String)
], MdCard.prototype, "mdSize", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", String)
], MdCard.prototype, "mdTitle", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", String)
], MdCard.prototype, "mdClass", void 0);
MdCard = __decorate([
    customElement("md-card"),
    autoinject,
    __metadata("design:paramtypes", [Element])
], MdCard);
export { MdCard };

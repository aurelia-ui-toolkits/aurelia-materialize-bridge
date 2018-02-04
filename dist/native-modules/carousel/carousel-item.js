var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { autoinject, bindable, bindingMode, customElement } from "aurelia-framework";
let MdCarouselItem = class MdCarouselItem {
    constructor(element) {
        this.element = element;
        this.mdHref = "";
        this.mdImage = "";
    }
};
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime })
], MdCarouselItem.prototype, "mdHref", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneWay })
], MdCarouselItem.prototype, "mdImage", void 0);
MdCarouselItem = __decorate([
    customElement("md-carousel-item"),
    autoinject
], MdCarouselItem);
export { MdCarouselItem };

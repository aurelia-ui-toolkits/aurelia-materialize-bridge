import { __decorate, __metadata } from "tslib";
import * as au from "../aurelia";
let MdCarouselItem = class MdCarouselItem {
    constructor(element) {
        this.element = element;
        this.href = "";
        this.image = "";
    }
};
__decorate([
    au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
    __metadata("design:type", String)
], MdCarouselItem.prototype, "href", void 0);
__decorate([
    au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneWay }),
    __metadata("design:type", String)
], MdCarouselItem.prototype, "image", void 0);
MdCarouselItem = __decorate([
    au.customElement("md-carousel-item"),
    au.autoinject,
    __metadata("design:paramtypes", [Element])
], MdCarouselItem);
export { MdCarouselItem };
//# sourceMappingURL=carousel-item.js.map
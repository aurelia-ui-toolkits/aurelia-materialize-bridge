import * as tslib_1 from "tslib";
import * as au from "../aurelia";
let MdCarouselItem = class MdCarouselItem {
    constructor(element) {
        this.element = element;
        this.href = "";
        this.image = "";
    }
};
tslib_1.__decorate([
    au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", String)
], MdCarouselItem.prototype, "href", void 0);
tslib_1.__decorate([
    au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneWay }),
    tslib_1.__metadata("design:type", String)
], MdCarouselItem.prototype, "image", void 0);
MdCarouselItem = tslib_1.__decorate([
    au.customElement("md-carousel-item"),
    au.autoinject,
    tslib_1.__metadata("design:paramtypes", [Element])
], MdCarouselItem);
export { MdCarouselItem };
//# sourceMappingURL=carousel-item.js.map
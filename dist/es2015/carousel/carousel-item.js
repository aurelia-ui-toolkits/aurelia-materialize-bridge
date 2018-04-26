import * as tslib_1 from "tslib";
import { autoinject, bindable, bindingMode, customElement } from "aurelia-framework";
var MdCarouselItem = /** @class */ (function () {
    function MdCarouselItem(element) {
        this.element = element;
        this.mdHref = "";
        this.mdImage = "";
    }
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", String)
    ], MdCarouselItem.prototype, "mdHref", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneWay }),
        tslib_1.__metadata("design:type", String)
    ], MdCarouselItem.prototype, "mdImage", void 0);
    MdCarouselItem = tslib_1.__decorate([
        customElement("md-carousel-item"),
        autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdCarouselItem);
    return MdCarouselItem;
}());
export { MdCarouselItem };
//# sourceMappingURL=carousel-item.js.map
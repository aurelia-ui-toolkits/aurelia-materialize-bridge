"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../aurelia");
var MdCarouselItem = /** @class */ (function () {
    function MdCarouselItem(element) {
        this.element = element;
        this.mdHref = "";
        this.mdImage = "";
    }
    tslib_1.__decorate([
        au.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", String)
    ], MdCarouselItem.prototype, "mdHref", void 0);
    tslib_1.__decorate([
        au.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneWay }),
        tslib_1.__metadata("design:type", String)
    ], MdCarouselItem.prototype, "mdImage", void 0);
    MdCarouselItem = tslib_1.__decorate([
        au.customElement("md-carousel-item"),
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdCarouselItem);
    return MdCarouselItem;
}());
exports.MdCarouselItem = MdCarouselItem;
//# sourceMappingURL=carousel-item.js.map
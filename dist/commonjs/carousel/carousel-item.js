"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var aurelia_framework_1 = require("aurelia-framework");
var MdCarouselItem = /** @class */ (function () {
    function MdCarouselItem(element) {
        this.element = element;
        this.mdHref = "";
        this.mdImage = "";
    }
    tslib_1.__decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", String)
    ], MdCarouselItem.prototype, "mdHref", void 0);
    tslib_1.__decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        tslib_1.__metadata("design:type", String)
    ], MdCarouselItem.prototype, "mdImage", void 0);
    MdCarouselItem = tslib_1.__decorate([
        aurelia_framework_1.customElement("md-carousel-item"),
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdCarouselItem);
    return MdCarouselItem;
}());
exports.MdCarouselItem = MdCarouselItem;

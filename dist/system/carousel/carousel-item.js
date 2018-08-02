System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, MdCarouselItem;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (au_1) {
                au = au_1;
            }
        ],
        execute: function () {
            MdCarouselItem = /** @class */ (function () {
                function MdCarouselItem(element) {
                    this.element = element;
                    this.href = "";
                    this.image = "";
                }
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
                return MdCarouselItem;
            }());
            exports_1("MdCarouselItem", MdCarouselItem);
        }
    };
});
//# sourceMappingURL=carousel-item.js.map
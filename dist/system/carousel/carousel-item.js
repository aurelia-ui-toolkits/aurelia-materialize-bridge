System.register(["tslib", "aurelia-framework"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, aurelia_framework_1, MdCarouselItem;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }
        ],
        execute: function () {
            MdCarouselItem = /** @class */ (function () {
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
            exports_1("MdCarouselItem", MdCarouselItem);
        }
    };
});

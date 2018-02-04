var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let MdCarouselItem = class MdCarouselItem {
        constructor(element) {
            this.element = element;
            this.mdHref = "";
            this.mdImage = "";
        }
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
    ], MdCarouselItem.prototype, "mdHref", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay })
    ], MdCarouselItem.prototype, "mdImage", void 0);
    MdCarouselItem = __decorate([
        aurelia_framework_1.customElement("md-carousel-item"),
        aurelia_framework_1.autoinject
    ], MdCarouselItem);
    exports.MdCarouselItem = MdCarouselItem;
});

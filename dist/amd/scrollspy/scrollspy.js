var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let MdScrollSpy = class MdScrollSpy {
        constructor(element) {
            this.element = element;
        }
        attached() {
            $(this.target, this.element).scrollSpy();
        }
        detached() {
            // destroy handler not available
        }
    };
    __decorate([
        aurelia_framework_1.bindable
    ], MdScrollSpy.prototype, "target", void 0);
    MdScrollSpy = __decorate([
        aurelia_framework_1.customAttribute("md-scrollspy"),
        aurelia_framework_1.autoinject
    ], MdScrollSpy);
    exports.MdScrollSpy = MdScrollSpy;
});

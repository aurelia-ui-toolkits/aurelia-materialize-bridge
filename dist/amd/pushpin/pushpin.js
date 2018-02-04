var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let MdPushpin = class MdPushpin {
        constructor(element) {
            this.element = element;
            this.bottom = Infinity;
            this.offset = 0;
            this.top = 0;
        }
        attached() {
            $(this.element).pushpin({
                bottom: (this.bottom === Infinity ? Infinity : parseInt(this.bottom.toString(), 10)),
                offset: parseInt(this.offset.toString(), 10),
                top: parseInt(this.top.toString(), 10)
            });
        }
        detached() {
            // destroy handler not available
        }
    };
    __decorate([
        aurelia_framework_1.bindable
    ], MdPushpin.prototype, "bottom", void 0);
    __decorate([
        aurelia_framework_1.bindable
    ], MdPushpin.prototype, "offset", void 0);
    __decorate([
        aurelia_framework_1.bindable
    ], MdPushpin.prototype, "top", void 0);
    MdPushpin = __decorate([
        aurelia_framework_1.customAttribute("md-pushpin"),
        aurelia_framework_1.autoinject
    ], MdPushpin);
    exports.MdPushpin = MdPushpin;
});

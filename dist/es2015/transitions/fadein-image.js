var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, customAttribute, autoinject } from "aurelia-framework";
import { getLogger } from "aurelia-logging";
let MdFadeinImage = class MdFadeinImage {
    constructor(element) {
        this.element = element;
        this.fadeInImage = this.fadeInImage.bind(this);
        this.log = getLogger("md-fadein-image");
    }
    attached() {
        this.element.addEventListener("click", this.fadeInImage);
        this.ensureOpacity();
    }
    detached() {
        this.element.removeEventListener("click", this.fadeInImage);
    }
    fadeInImage() {
        Materialize.fadeInImage($(this.ref));
    }
    ensureOpacity() {
        let opacity = window.getComputedStyle(this.ref).opacity;
        if (opacity !== "0") {
            this.ref.style.opacity = "0";
        }
    }
};
__decorate([
    bindable,
    __metadata("design:type", HTMLElement)
], MdFadeinImage.prototype, "ref", void 0);
MdFadeinImage = __decorate([
    customAttribute("md-fadein-image"),
    autoinject,
    __metadata("design:paramtypes", [Element])
], MdFadeinImage);
export { MdFadeinImage };

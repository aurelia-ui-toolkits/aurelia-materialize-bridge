import * as tslib_1 from "tslib";
import { bindable, customAttribute, autoinject } from "aurelia-framework";
import { getLogger } from "aurelia-logging";
var MdFadeinImage = /** @class */ (function () {
    function MdFadeinImage(element) {
        this.element = element;
        this.fadeInImage = this.fadeInImage.bind(this);
        this.log = getLogger("md-fadein-image");
    }
    MdFadeinImage.prototype.attached = function () {
        this.element.addEventListener("click", this.fadeInImage);
        this.ensureOpacity();
    };
    MdFadeinImage.prototype.detached = function () {
        this.element.removeEventListener("click", this.fadeInImage);
    };
    MdFadeinImage.prototype.fadeInImage = function () {
        Materialize.fadeInImage($(this.ref));
    };
    MdFadeinImage.prototype.ensureOpacity = function () {
        var opacity = window.getComputedStyle(this.ref).opacity;
        if (opacity !== "0") {
            this.ref.style.opacity = "0";
        }
    };
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", HTMLElement)
    ], MdFadeinImage.prototype, "ref", void 0);
    MdFadeinImage = tslib_1.__decorate([
        customAttribute("md-fadein-image"),
        autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdFadeinImage);
    return MdFadeinImage;
}());
export { MdFadeinImage };

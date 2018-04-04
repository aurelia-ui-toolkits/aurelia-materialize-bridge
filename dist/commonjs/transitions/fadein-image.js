"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_logging_1 = require("aurelia-logging");
var MdFadeinImage = /** @class */ (function () {
    function MdFadeinImage(element) {
        this.element = element;
        this.fadeInImage = this.fadeInImage.bind(this);
        this.log = aurelia_logging_1.getLogger("md-fadein-image");
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
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", HTMLElement)
    ], MdFadeinImage.prototype, "ref", void 0);
    MdFadeinImage = tslib_1.__decorate([
        aurelia_framework_1.customAttribute("md-fadein-image"),
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdFadeinImage);
    return MdFadeinImage;
}());
exports.MdFadeinImage = MdFadeinImage;

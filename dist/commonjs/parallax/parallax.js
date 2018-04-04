"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var aurelia_templating_1 = require("aurelia-templating");
var aurelia_dependency_injection_1 = require("aurelia-dependency-injection");
var MdParallax = /** @class */ (function () {
    function MdParallax(element) {
        this.element = element;
    }
    MdParallax.prototype.attached = function () {
        $(this.element).parallax();
    };
    MdParallax.prototype.detached = function () {
        // destroy handler not available
    };
    MdParallax = tslib_1.__decorate([
        aurelia_templating_1.customAttribute("md-parallax"),
        aurelia_dependency_injection_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdParallax);
    return MdParallax;
}());
exports.MdParallax = MdParallax;

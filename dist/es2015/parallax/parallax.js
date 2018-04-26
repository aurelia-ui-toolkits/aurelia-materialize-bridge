import * as tslib_1 from "tslib";
import { customAttribute } from "aurelia-templating";
import { autoinject } from "aurelia-dependency-injection";
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
        customAttribute("md-parallax"),
        autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdParallax);
    return MdParallax;
}());
export { MdParallax };
//# sourceMappingURL=parallax.js.map
import * as tslib_1 from "tslib";
import * as au from "../aurelia";
var MdParallax = /** @class */ (function () {
    function MdParallax(element) {
        this.element = element;
    }
    MdParallax.prototype.attached = function () {
        this.element.classList.add("parallax");
        var options = {
            responsiveThreshold: this.responsiveThreshold
        };
        au.cleanOptions(options);
        this.instance = new M.Parallax(this.element, options);
    };
    MdParallax.prototype.detached = function () {
        this.instance.destroy();
        this.element.classList.remove("parallax");
    };
    tslib_1.__decorate([
        au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Number)
    ], MdParallax.prototype, "responsiveThreshold", void 0);
    MdParallax = tslib_1.__decorate([
        au.customAttribute("md-parallax"),
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdParallax);
    return MdParallax;
}());
export { MdParallax };
//# sourceMappingURL=parallax.js.map
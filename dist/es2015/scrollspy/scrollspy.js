import * as tslib_1 from "tslib";
import { bindable, customAttribute, autoinject } from "aurelia-framework";
var MdScrollSpy = /** @class */ (function () {
    function MdScrollSpy(element) {
        this.element = element;
    }
    MdScrollSpy.prototype.attached = function () {
        $(this.target, this.element).scrollSpy();
    };
    MdScrollSpy.prototype.detached = function () {
        // destroy handler not available
    };
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", String)
    ], MdScrollSpy.prototype, "target", void 0);
    MdScrollSpy = tslib_1.__decorate([
        customAttribute("md-scrollspy"),
        autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdScrollSpy);
    return MdScrollSpy;
}());
export { MdScrollSpy };

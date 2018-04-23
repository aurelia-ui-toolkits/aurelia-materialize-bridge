import * as tslib_1 from "tslib";
import { bindable, customAttribute, autoinject } from "aurelia-framework";
import { MdSidenav } from "./sidenav";
var MdSidenavCollapse = /** @class */ (function () {
    function MdSidenavCollapse(element) {
        this.element = element;
        this.element = element;
    }
    MdSidenavCollapse.prototype.attached = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                this.element.addEventListener("click", function () { return _this.click(); });
                return [2 /*return*/];
            });
        });
    };
    MdSidenavCollapse.prototype.click = function () {
        if (this.isOpen) {
            this.ref.close();
            this.isOpen = false;
        }
        else {
            this.ref.open();
            this.isOpen = true;
        }
    };
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", MdSidenav)
    ], MdSidenavCollapse.prototype, "ref", void 0);
    MdSidenavCollapse = tslib_1.__decorate([
        customAttribute("md-sidenav-collapse"),
        autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdSidenavCollapse);
    return MdSidenavCollapse;
}());
export { MdSidenavCollapse };

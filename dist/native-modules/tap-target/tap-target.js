import * as tslib_1 from "tslib";
import { bindable, customElement, autoinject } from "aurelia-framework";
import { getLogger } from "aurelia-logging";
var MdTapTarget = /** @class */ (function () {
    function MdTapTarget(element) {
        this.element = element;
        this.mdRef = null;
        this.log = getLogger("md-tap-target");
    }
    MdTapTarget_1 = MdTapTarget;
    MdTapTarget.prototype.bind = function () {
        if (!this.mdRef) {
            throw new Error("md-tap-target needs a referenced element");
        }
        else {
            var id = this.mdRef.getAttribute("id");
            if (!id) {
                id = "md-tap-target-" + MdTapTarget_1.controlId++;
                this.mdRef.setAttribute("id", id);
            }
            this.element.setAttribute("data-activates", id);
        }
    };
    MdTapTarget.prototype.open = function () {
        $(this.element).tapTarget("open");
    };
    MdTapTarget.prototype.close = function () {
        $(this.element).tapTarget("close");
    };
    MdTapTarget.controlId = 0;
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", HTMLElement)
    ], MdTapTarget.prototype, "mdRef", void 0);
    MdTapTarget = MdTapTarget_1 = tslib_1.__decorate([
        customElement("md-tap-target"),
        autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdTapTarget);
    return MdTapTarget;
    var MdTapTarget_1;
}());
export { MdTapTarget };

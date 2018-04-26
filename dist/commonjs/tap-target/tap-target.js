"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_logging_1 = require("aurelia-logging");
var MdTapTarget = /** @class */ (function () {
    function MdTapTarget(element) {
        this.element = element;
        this.mdRef = null;
        this.log = aurelia_logging_1.getLogger("md-tap-target");
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
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", HTMLElement)
    ], MdTapTarget.prototype, "mdRef", void 0);
    MdTapTarget = MdTapTarget_1 = tslib_1.__decorate([
        aurelia_framework_1.customElement("md-tap-target"),
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdTapTarget);
    return MdTapTarget;
    var MdTapTarget_1;
}());
exports.MdTapTarget = MdTapTarget;
//# sourceMappingURL=tap-target.js.map
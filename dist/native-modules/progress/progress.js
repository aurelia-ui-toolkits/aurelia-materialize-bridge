import * as tslib_1 from "tslib";
import { bindable, customElement, bindingMode, autoinject } from "aurelia-framework";
var MdProgress = /** @class */ (function () {
    function MdProgress(element) {
        this.element = element;
        this.mdColor = null;
        this.mdPixelSize = null;
        this.mdSize = "big";
        this.mdType = "linear";
        this.mdValue = null;
    }
    MdProgress.prototype.mdPixelSizeChanged = function (newValue) {
        if (this.wrapper) {
            newValue = (newValue === null || newValue === "" || typeof newValue === "number" && isNaN(newValue)) ? "" : newValue + "px";
            this.wrapper.style.height = newValue;
            this.wrapper.style.width = newValue;
        }
    };
    MdProgress.prototype.bind = function () {
        // DO NOT REMOVE!!!
        // This disables property changed callbacks for any bindable properties during initialization
        // Prevents mdPixelSize getting cleared by the mdSizeChanged event during binding
    };
    MdProgress.prototype.attached = function () {
        this.mdPixelSizeChanged(this.mdPixelSize);
    };
    MdProgress.prototype.mdSizeChanged = function (newValue) {
        this.mdPixelSize = null;
    };
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", String)
    ], MdProgress.prototype, "mdColor", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.twoWay }),
        tslib_1.__metadata("design:type", Object)
    ], MdProgress.prototype, "mdPixelSize", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", String)
    ], MdProgress.prototype, "mdSize", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", String)
    ], MdProgress.prototype, "mdType", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.twoWay }),
        tslib_1.__metadata("design:type", Number)
    ], MdProgress.prototype, "mdValue", void 0);
    MdProgress = tslib_1.__decorate([
        customElement("md-progress"),
        autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdProgress);
    return MdProgress;
}());
export { MdProgress };

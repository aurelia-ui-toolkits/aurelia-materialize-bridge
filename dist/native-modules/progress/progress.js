import * as tslib_1 from "tslib";
import * as au from "../aurelia";
var MdProgress = /** @class */ (function () {
    function MdProgress(element) {
        this.element = element;
        this.color = null;
        this.pixelSize = null;
        this.size = "big";
        this.type = "linear";
        this.value = null;
    }
    MdProgress.prototype.pixelSizeChanged = function (newValue) {
        if (this.wrapper) {
            this.wrapper.style.height = newValue + "px";
            this.wrapper.style.width = newValue + "px";
        }
    };
    MdProgress.prototype.sizeChanged = function (newValue) {
        this.pixelSize = null;
    };
    MdProgress.prototype.bind = function () {
        // DO NOT REMOVE!!!
        // This disables property changed callbacks for any bindable properties during initialization
        // Prevents mdPixelSize getting cleared by the mdSizeChanged event during binding
    };
    MdProgress.prototype.attached = function () {
        this.pixelSizeChanged(this.pixelSize);
    };
    tslib_1.__decorate([
        au.ato.bindable.stringMd,
        tslib_1.__metadata("design:type", String)
    ], MdProgress.prototype, "color", void 0);
    tslib_1.__decorate([
        au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.twoWay }),
        tslib_1.__metadata("design:type", Number)
    ], MdProgress.prototype, "pixelSize", void 0);
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", String)
    ], MdProgress.prototype, "size", void 0);
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", String)
    ], MdProgress.prototype, "type", void 0);
    tslib_1.__decorate([
        au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.twoWay }),
        tslib_1.__metadata("design:type", Number)
    ], MdProgress.prototype, "value", void 0);
    MdProgress = tslib_1.__decorate([
        au.customElement("md-progress"),
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdProgress);
    return MdProgress;
}());
export { MdProgress };
//# sourceMappingURL=progress.js.map
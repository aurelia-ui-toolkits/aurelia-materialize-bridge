import * as tslib_1 from "tslib";
import { bindable, customElement, autoinject, bindingMode } from "aurelia-framework";
import { getBooleanFromAttributeValue } from "../common/attributes";
import { getLogger } from "aurelia-logging";
var MdSlider = /** @class */ (function () {
    function MdSlider(element) {
        this.element = element;
        this.mdFillContainer = false;
        this.mdHeight = 400;
        this.mdIndicators = true;
        this.mdInterval = 6000;
        this.mdTransition = 500;
        this.log = getLogger("md-slider");
    }
    MdSlider.prototype.attached = function () {
        if (getBooleanFromAttributeValue(this.mdFillContainer)) {
            this.element.classList.add("fullscreen");
        }
        this.refresh();
    };
    MdSlider.prototype.pause = function () {
        $(this.element).slider("pause");
    };
    MdSlider.prototype.start = function () {
        $(this.element).slider("start");
    };
    MdSlider.prototype.next = function () {
        $(this.element).slider("next");
    };
    MdSlider.prototype.prev = function () {
        $(this.element).slider("prev");
    };
    MdSlider.prototype.refresh = function () {
        var options = {
            height: parseInt(this.mdHeight.toString(), 10),
            indicators: getBooleanFromAttributeValue(this.mdIndicators),
            interval: parseInt(this.mdInterval.toString(), 10),
            transition: parseInt(this.mdTransition.toString(), 10)
        };
        this.log.debug("refreshing slider, params:", options);
        $(this.element).slider(options);
    };
    MdSlider.prototype.mdIndicatorsChanged = function () {
        this.refresh();
    };
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdSlider.prototype, "mdFillContainer", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdSlider.prototype, "mdHeight", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdSlider.prototype, "mdIndicators", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdSlider.prototype, "mdInterval", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdSlider.prototype, "mdTransition", void 0);
    MdSlider = tslib_1.__decorate([
        customElement("md-slider"),
        autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdSlider);
    return MdSlider;
}());
export { MdSlider };
//# sourceMappingURL=slider.js.map
import * as tslib_1 from "tslib";
import { autoinject, bindable, bindingMode, children, customElement } from "aurelia-framework";
import { TaskQueue } from "aurelia-task-queue";
import { getBooleanFromAttributeValue } from "../common/attributes";
var MdCarousel = /** @class */ (function () {
    function MdCarousel(element, taskQueue) {
        this.element = element;
        this.taskQueue = taskQueue;
        this.mdIndicators = true;
        this.mdSlider = false;
        this.items = [];
    }
    MdCarousel.prototype.attached = function () {
        if (getBooleanFromAttributeValue(this.mdSlider)) {
            this.element.classList.add("carousel-slider");
        }
        this.refresh();
    };
    MdCarousel.prototype.detached = function () {
        $(this.element).carousel("destroy");
    };
    MdCarousel.prototype.itemsChanged = function (newValue) {
        this.refresh();
    };
    MdCarousel.prototype.refresh = function () {
        var _this = this;
        if (this.items.length > 0) {
            var options_1 = {
                full_width: getBooleanFromAttributeValue(this.mdSlider),
                fullWidth: getBooleanFromAttributeValue(this.mdSlider),
                indicators: this.mdIndicators
            };
            this.taskQueue.queueTask(function () {
                $(_this.element).carousel(options_1);
            });
        }
    };
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdCarousel.prototype, "mdIndicators", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdCarousel.prototype, "mdSlider", void 0);
    tslib_1.__decorate([
        children("md-carousel-item"),
        tslib_1.__metadata("design:type", Array)
    ], MdCarousel.prototype, "items", void 0);
    MdCarousel = tslib_1.__decorate([
        customElement("md-carousel"),
        autoinject,
        tslib_1.__metadata("design:paramtypes", [Element, TaskQueue])
    ], MdCarousel);
    return MdCarousel;
}());
export { MdCarousel };
//# sourceMappingURL=carousel.js.map
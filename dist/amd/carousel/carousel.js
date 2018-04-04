define(["require", "exports", "tslib", "aurelia-framework", "aurelia-task-queue", "../common/attributes"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_task_queue_1, attributes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdCarousel = /** @class */ (function () {
        function MdCarousel(element, taskQueue) {
            this.element = element;
            this.taskQueue = taskQueue;
            this.mdIndicators = true;
            this.mdSlider = false;
            this.items = [];
        }
        MdCarousel.prototype.attached = function () {
            if (attributes_1.getBooleanFromAttributeValue(this.mdSlider)) {
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
                    full_width: attributes_1.getBooleanFromAttributeValue(this.mdSlider),
                    fullWidth: attributes_1.getBooleanFromAttributeValue(this.mdSlider),
                    indicators: this.mdIndicators
                };
                this.taskQueue.queueTask(function () {
                    $(_this.element).carousel(options_1);
                });
            }
        };
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", Object)
        ], MdCarousel.prototype, "mdIndicators", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Object)
        ], MdCarousel.prototype, "mdSlider", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.children("md-carousel-item"),
            tslib_1.__metadata("design:type", Array)
        ], MdCarousel.prototype, "items", void 0);
        MdCarousel = tslib_1.__decorate([
            aurelia_framework_1.customElement("md-carousel"),
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element, aurelia_task_queue_1.TaskQueue])
        ], MdCarousel);
        return MdCarousel;
    }());
    exports.MdCarousel = MdCarousel;
});

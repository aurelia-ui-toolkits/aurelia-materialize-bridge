define(["require", "exports", "tslib", "../aurelia"], function (require, exports, tslib_1, au) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdSlider = /** @class */ (function () {
        function MdSlider(element) {
            this.element = element;
            this.mdFillContainer = false;
            this.log = au.getLogger("md-slider");
        }
        MdSlider.prototype.mdIndicatorsChanged = function () {
            this.refresh();
        };
        MdSlider.prototype.attached = function () {
            if (this.mdFillContainer) {
                this.element.classList.add("fullscreen");
            }
            this.refresh();
        };
        MdSlider.prototype.detached = function () {
            this.instance.destroy();
        };
        MdSlider.prototype.pause = function () {
            this.instance.pause();
        };
        MdSlider.prototype.start = function () {
            this.instance.start();
        };
        MdSlider.prototype.next = function () {
            this.instance.next();
        };
        MdSlider.prototype.prev = function () {
            this.instance.prev();
        };
        MdSlider.prototype.refresh = function () {
            var options = {
                indicators: this.mdIndicators,
                height: this.mdHeight,
                duration: this.mdDuration,
                interval: this.mdInterval
            };
            this.log.debug("refreshing slider, params:", options);
            au.cleanOptions(options);
            this.instance = new M.Slider(this.element, options);
        };
        tslib_1.__decorate([
            au.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Boolean)
        ], MdSlider.prototype, "mdFillContainer", void 0);
        tslib_1.__decorate([
            au.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Number)
        ], MdSlider.prototype, "mdHeight", void 0);
        tslib_1.__decorate([
            au.bindable.booleanMd,
            tslib_1.__metadata("design:type", Boolean)
        ], MdSlider.prototype, "mdIndicators", void 0);
        tslib_1.__decorate([
            au.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Number)
        ], MdSlider.prototype, "mdInterval", void 0);
        tslib_1.__decorate([
            au.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Number)
        ], MdSlider.prototype, "mdDuration", void 0);
        MdSlider = tslib_1.__decorate([
            au.customElement("md-slider"),
            au.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element])
        ], MdSlider);
        return MdSlider;
    }());
    exports.MdSlider = MdSlider;
});
//# sourceMappingURL=slider.js.map
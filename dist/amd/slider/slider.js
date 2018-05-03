define(["require", "exports", "tslib", "../aurelia"], function (require, exports, tslib_1, au) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdSlider = /** @class */ (function () {
        function MdSlider(element) {
            this.element = element;
            this.fillContainer = false;
            this.log = au.getLogger("md-slider");
        }
        MdSlider.prototype.indicatorsChanged = function () {
            this.refresh();
        };
        MdSlider.prototype.attached = function () {
            if (this.fillContainer) {
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
                indicators: this.indicators,
                height: this.height,
                duration: this.duration,
                interval: this.interval
            };
            this.log.debug("refreshing slider, params:", options);
            au.cleanOptions(options);
            this.instance = new M.Slider(this.element, options);
        };
        tslib_1.__decorate([
            au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Boolean)
        ], MdSlider.prototype, "fillContainer", void 0);
        tslib_1.__decorate([
            au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Number)
        ], MdSlider.prototype, "height", void 0);
        tslib_1.__decorate([
            au.ato.bindable.booleanMd,
            tslib_1.__metadata("design:type", Boolean)
        ], MdSlider.prototype, "indicators", void 0);
        tslib_1.__decorate([
            au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Number)
        ], MdSlider.prototype, "interval", void 0);
        tslib_1.__decorate([
            au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Number)
        ], MdSlider.prototype, "duration", void 0);
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
import * as tslib_1 from "tslib";
import * as au from "../aurelia";
let MdSlider = class MdSlider {
    constructor(element) {
        this.element = element;
        this.fillContainer = false;
        this.log = au.getLogger("md-slider");
    }
    indicatorsChanged() {
        this.refresh();
    }
    attached() {
        if (this.fillContainer) {
            this.element.classList.add("fullscreen");
        }
        this.refresh();
    }
    detached() {
        this.instance.destroy();
    }
    pause() {
        this.instance.pause();
    }
    start() {
        this.instance.start();
    }
    next() {
        this.instance.next();
    }
    prev() {
        this.instance.prev();
    }
    refresh() {
        let options = {
            indicators: this.indicators,
            height: this.height,
            duration: this.duration,
            interval: this.interval
        };
        this.log.debug("refreshing slider, params:", options);
        au.cleanOptions(options);
        this.instance = new M.Slider(this.element, options);
    }
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
export { MdSlider };
//# sourceMappingURL=slider.js.map
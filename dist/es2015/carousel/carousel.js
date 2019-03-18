import * as tslib_1 from "tslib";
import * as au from "../aurelia";
let MdCarousel = class MdCarousel {
    constructor(element, taskQueue) {
        this.element = element;
        this.taskQueue = taskQueue;
        this.indicators = true;
        this.fullWidth = false;
        this.items = [];
    }
    itemsChanged() {
        this.refresh();
    }
    attached() {
        if (this.fullWidth) {
            this.element.classList.add("carousel-slider");
        }
        this.refresh();
    }
    detached() {
        this.instance.destroy();
    }
    refresh() {
        if (!this.items.length) {
            return;
        }
        const options = {
            fullWidth: this.fullWidth,
            indicators: this.indicators,
            dist: this.dist,
            duration: this.duration,
            noWrap: this.noWrap,
            numVisible: this.numVisible,
            padding: this.padding,
            shift: this.shift,
            onCycleTo: (current, dragged) => au.fireMaterializeEvent(this.element, "cycle-to", { current, dragged })
        };
        au.cleanOptions(options);
        this.taskQueue.queueTask(() => {
            this.instance = new M.Carousel(this.element, options);
        });
    }
    next(n) {
        this.instance.next(n);
    }
    prev(n) {
        this.instance.prev(n);
    }
    set(n) {
        this.instance.set(n);
    }
};
tslib_1.__decorate([
    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Boolean)
], MdCarousel.prototype, "indicators", void 0);
tslib_1.__decorate([
    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Boolean)
], MdCarousel.prototype, "fullWidth", void 0);
tslib_1.__decorate([
    au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Number)
], MdCarousel.prototype, "duration", void 0);
tslib_1.__decorate([
    au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Number)
], MdCarousel.prototype, "dist", void 0);
tslib_1.__decorate([
    au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Number)
], MdCarousel.prototype, "shift", void 0);
tslib_1.__decorate([
    au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Number)
], MdCarousel.prototype, "padding", void 0);
tslib_1.__decorate([
    au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Number)
], MdCarousel.prototype, "numVisible", void 0);
tslib_1.__decorate([
    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Boolean)
], MdCarousel.prototype, "noWrap", void 0);
tslib_1.__decorate([
    au.children("md-carousel-item"),
    tslib_1.__metadata("design:type", Array)
], MdCarousel.prototype, "items", void 0);
MdCarousel = tslib_1.__decorate([
    au.customElement("md-carousel"),
    au.autoinject,
    tslib_1.__metadata("design:paramtypes", [Element, au.TaskQueue])
], MdCarousel);
export { MdCarousel };
//# sourceMappingURL=carousel.js.map
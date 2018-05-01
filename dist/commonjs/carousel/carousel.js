"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../aurelia");
var MdCarousel = /** @class */ (function () {
    function MdCarousel(element, taskQueue) {
        this.element = element;
        this.taskQueue = taskQueue;
        this.mdIndicators = true;
        this.mdFullWidth = false;
        this.items = [];
    }
    MdCarousel.prototype.itemsChanged = function () {
        this.refresh();
    };
    MdCarousel.prototype.attached = function () {
        if (this.mdFullWidth) {
            this.element.classList.add("carousel-slider");
        }
        this.refresh();
    };
    MdCarousel.prototype.detached = function () {
        this.instance.destroy();
    };
    MdCarousel.prototype.refresh = function () {
        var _this = this;
        if (!this.items.length) {
            return;
        }
        var options = {
            fullWidth: this.mdFullWidth,
            indicators: this.mdIndicators,
            dist: this.mdDist,
            duration: this.mdDuration,
            noWrap: this.mdNoWrap,
            numVisible: this.mdNumVisible,
            padding: this.mdPadding,
            shift: this.mdShift,
            onCycleTo: function (current, dragged) { return au.fireMaterializeEvent(_this.element, "cycle-to", { current: current, dragged: dragged }); }
        };
        au.cleanOptions(options);
        this.taskQueue.queueTask(function () {
            _this.instance = new M.Carousel(_this.element, options);
        });
    };
    MdCarousel.prototype.next = function (n) {
        this.instance.next(n);
    };
    MdCarousel.prototype.prev = function (n) {
        this.instance.prev(n);
    };
    MdCarousel.prototype.set = function (n) {
        this.instance.set(n);
    };
    tslib_1.__decorate([
        au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdCarousel.prototype, "mdIndicators", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdCarousel.prototype, "mdFullWidth", void 0);
    tslib_1.__decorate([
        au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Number)
    ], MdCarousel.prototype, "mdDuration", void 0);
    tslib_1.__decorate([
        au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Number)
    ], MdCarousel.prototype, "mdDist", void 0);
    tslib_1.__decorate([
        au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Number)
    ], MdCarousel.prototype, "mdShift", void 0);
    tslib_1.__decorate([
        au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Number)
    ], MdCarousel.prototype, "mdPadding", void 0);
    tslib_1.__decorate([
        au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Number)
    ], MdCarousel.prototype, "mdNumVisible", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdCarousel.prototype, "mdNoWrap", void 0);
    tslib_1.__decorate([
        au.children("md-carousel-item"),
        tslib_1.__metadata("design:type", Array)
    ], MdCarousel.prototype, "items", void 0);
    MdCarousel = tslib_1.__decorate([
        au.customElement("md-carousel"),
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element, au.TaskQueue])
    ], MdCarousel);
    return MdCarousel;
}());
exports.MdCarousel = MdCarousel;
//# sourceMappingURL=carousel.js.map
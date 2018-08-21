System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, MdCarousel;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (au_1) {
                au = au_1;
            }
        ],
        execute: function () {
            MdCarousel = /** @class */ (function () {
                function MdCarousel(element, taskQueue) {
                    this.element = element;
                    this.taskQueue = taskQueue;
                    this.indicators = true;
                    this.fullWidth = false;
                    this.items = [];
                }
                MdCarousel.prototype.itemsChanged = function () {
                    this.refresh();
                };
                MdCarousel.prototype.attached = function () {
                    if (this.fullWidth) {
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
                        fullWidth: this.fullWidth,
                        indicators: this.indicators,
                        dist: this.dist,
                        duration: this.duration,
                        noWrap: this.noWrap,
                        numVisible: this.numVisible,
                        padding: this.padding,
                        shift: this.shift,
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
                return MdCarousel;
            }());
            exports_1("MdCarousel", MdCarousel);
        }
    };
});
//# sourceMappingURL=carousel.js.map
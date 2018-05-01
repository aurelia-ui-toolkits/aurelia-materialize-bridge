define(["require", "exports", "tslib", "../aurelia"], function (require, exports, tslib_1, au) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdScrollSpy = /** @class */ (function () {
        function MdScrollSpy(element) {
            this.element = element;
        }
        MdScrollSpy.prototype.attached = function () {
            var options = {
                throttle: this.throttle,
                scrollOffset: this.scrollOffset,
                activeClass: this.activeClass,
                getActiveElement: this.getActiveElement
            };
            au.cleanOptions(options);
            this.instance = new M.ScrollSpy(this.element, options);
        };
        MdScrollSpy.prototype.detached = function () {
            this.instance.destroy();
        };
        tslib_1.__decorate([
            au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Number)
        ], MdScrollSpy.prototype, "throttle", void 0);
        tslib_1.__decorate([
            au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Number)
        ], MdScrollSpy.prototype, "scrollOffset", void 0);
        tslib_1.__decorate([
            au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", String)
        ], MdScrollSpy.prototype, "activeClass", void 0);
        tslib_1.__decorate([
            au.bindable,
            tslib_1.__metadata("design:type", Function)
        ], MdScrollSpy.prototype, "getActiveElement", void 0);
        MdScrollSpy = tslib_1.__decorate([
            au.customAttribute("md-scrollspy"),
            au.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element])
        ], MdScrollSpy);
        return MdScrollSpy;
    }());
    exports.MdScrollSpy = MdScrollSpy;
});
//# sourceMappingURL=scrollspy.js.map
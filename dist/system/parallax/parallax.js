System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, MdParallax;
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
            MdParallax = /** @class */ (function () {
                function MdParallax(element) {
                    this.element = element;
                }
                MdParallax.prototype.attached = function () {
                    this.element.classList.add("parallax");
                    var options = {
                        responsiveThreshold: this.responsiveThreshold
                    };
                    au.cleanOptions(options);
                    this.instance = new M.Parallax(this.element, options);
                };
                MdParallax.prototype.detached = function () {
                    this.instance.destroy();
                    this.element.classList.remove("parallax");
                };
                tslib_1.__decorate([
                    au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", Number)
                ], MdParallax.prototype, "responsiveThreshold", void 0);
                MdParallax = tslib_1.__decorate([
                    au.customAttribute("md-parallax"),
                    au.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], MdParallax);
                return MdParallax;
            }());
            exports_1("MdParallax", MdParallax);
        }
    };
});
//# sourceMappingURL=parallax.js.map
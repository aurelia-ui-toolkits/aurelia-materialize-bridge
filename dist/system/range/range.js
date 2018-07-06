System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, MdRange;
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
            MdRange = /** @class */ (function () {
                function MdRange(element) {
                    this.element = element;
                    this.readonly = false;
                    this.min = 0;
                    this.max = 100;
                    this.step = 1;
                    this.value = 0;
                }
                MdRange.prototype.attached = function () {
                    this.instance = new M.Range(this.input);
                };
                MdRange.prototype.detached = function () {
                    this.instance.destroy();
                };
                tslib_1.__decorate([
                    au.ato.bindable.booleanMd,
                    tslib_1.__metadata("design:type", Boolean)
                ], MdRange.prototype, "readonly", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", Number)
                ], MdRange.prototype, "min", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", Number)
                ], MdRange.prototype, "max", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", Number)
                ], MdRange.prototype, "step", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.twoWay }),
                    tslib_1.__metadata("design:type", Number)
                ], MdRange.prototype, "value", void 0);
                MdRange = tslib_1.__decorate([
                    au.customElement("md-range"),
                    au.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], MdRange);
                return MdRange;
            }());
            exports_1("MdRange", MdRange);
        }
    };
});
//# sourceMappingURL=range.js.map
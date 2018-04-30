System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, au, MdRange;
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
                    this.mdReadonly = false;
                    this.mdMin = 0;
                    this.mdMax = 100;
                    this.mdStep = 1;
                    this.mdValue = 0;
                }
                MdRange.prototype.attached = function () {
                    this.instance = new M.Range(this.input);
                };
                MdRange.prototype.detached = function () {
                    this.instance.destroy();
                };
                tslib_1.__decorate([
                    au.bindable.booleanMd,
                    tslib_1.__metadata("design:type", Boolean)
                ], MdRange.prototype, "mdReadonly", void 0);
                tslib_1.__decorate([
                    au.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", Number)
                ], MdRange.prototype, "mdMin", void 0);
                tslib_1.__decorate([
                    au.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", Number)
                ], MdRange.prototype, "mdMax", void 0);
                tslib_1.__decorate([
                    au.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", Number)
                ], MdRange.prototype, "mdStep", void 0);
                tslib_1.__decorate([
                    au.bindable.numberMd({ defaultBindingMode: au.bindingMode.twoWay }),
                    tslib_1.__metadata("design:type", Number)
                ], MdRange.prototype, "mdValue", void 0);
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
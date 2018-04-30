System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, au, MdChip;
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
            MdChip = /** @class */ (function () {
                function MdChip(element) {
                    this.element = element;
                    this.mdClose = false;
                }
                MdChip.prototype.close = function () {
                    this.element.parentElement.removeChild(this.element);
                    au.fireEvent(this.element, "close");
                };
                tslib_1.__decorate([
                    au.bindable.booleanMd,
                    tslib_1.__metadata("design:type", Boolean)
                ], MdChip.prototype, "mdClose", void 0);
                MdChip = tslib_1.__decorate([
                    au.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], MdChip);
                return MdChip;
            }());
            exports_1("MdChip", MdChip);
        }
    };
});
//# sourceMappingURL=chip.js.map
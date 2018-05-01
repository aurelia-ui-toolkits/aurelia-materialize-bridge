System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, au, MdCard;
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
            MdCard = /** @class */ (function () {
                function MdCard(element) {
                    this.element = element;
                    this.mdImage = null;
                    this.mdSize = "";
                }
                tslib_1.__decorate([
                    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", Boolean)
                ], MdCard.prototype, "mdHorizontal", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", String)
                ], MdCard.prototype, "mdImage", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", Boolean)
                ], MdCard.prototype, "mdReveal", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", Boolean)
                ], MdCard.prototype, "mdAction", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", Boolean)
                ], MdCard.prototype, "mdStickyAction", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneWay }),
                    tslib_1.__metadata("design:type", String)
                ], MdCard.prototype, "mdSize", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", String)
                ], MdCard.prototype, "mdTitle", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
                    tslib_1.__metadata("design:type", String)
                ], MdCard.prototype, "mdClass", void 0);
                MdCard = tslib_1.__decorate([
                    au.customElement("md-card"),
                    au.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], MdCard);
                return MdCard;
            }());
            exports_1("MdCard", MdCard);
        }
    };
});
//# sourceMappingURL=card.js.map
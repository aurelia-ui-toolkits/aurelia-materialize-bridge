define(["require", "exports", "tslib", "../aurelia"], function (require, exports, tslib_1, au) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdCard = /** @class */ (function () {
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
    exports.MdCard = MdCard;
});
//# sourceMappingURL=card.js.map
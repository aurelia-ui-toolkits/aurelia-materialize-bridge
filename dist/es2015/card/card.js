import * as tslib_1 from "tslib";
import * as au from "../aurelia";
var MdCard = /** @class */ (function () {
    function MdCard(element) {
        this.element = element;
        this.image = null;
        this.size = "";
    }
    tslib_1.__decorate([
        au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdCard.prototype, "horizontal", void 0);
    tslib_1.__decorate([
        au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", String)
    ], MdCard.prototype, "image", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdCard.prototype, "reveal", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdCard.prototype, "action", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdCard.prototype, "stickyAction", void 0);
    tslib_1.__decorate([
        au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneWay }),
        tslib_1.__metadata("design:type", String)
    ], MdCard.prototype, "size", void 0);
    tslib_1.__decorate([
        au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", String)
    ], MdCard.prototype, "title", void 0);
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
export { MdCard };
//# sourceMappingURL=card.js.map
import * as tslib_1 from "tslib";
import { autoinject, bindable, bindingMode, customElement } from "aurelia-framework";
import { getBooleanFromAttributeValue } from "../common/attributes";
var MdCard = /** @class */ (function () {
    function MdCard(element) {
        this.element = element;
        this.mdImage = null;
        this.mdReveal = false;
        this.mdAction = false;
        this.mdStickyAction = false;
        this.mdSize = "";
    }
    MdCard.prototype.attached = function () {
        this.mdHorizontal = getBooleanFromAttributeValue(this.mdHorizontal);
        this.mdReveal = getBooleanFromAttributeValue(this.mdReveal);
        this.mdAction = getBooleanFromAttributeValue(this.mdAction);
        this.mdStickyAction = getBooleanFromAttributeValue(this.mdStickyAction);
    };
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdCard.prototype, "mdHorizontal", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdCard.prototype, "mdImage", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdCard.prototype, "mdReveal", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdCard.prototype, "mdAction", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdCard.prototype, "mdStickyAction", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneWay }),
        tslib_1.__metadata("design:type", String)
    ], MdCard.prototype, "mdSize", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", String)
    ], MdCard.prototype, "mdTitle", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        tslib_1.__metadata("design:type", String)
    ], MdCard.prototype, "mdClass", void 0);
    MdCard = tslib_1.__decorate([
        customElement("md-card"),
        autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdCard);
    return MdCard;
}());
export { MdCard };
//# sourceMappingURL=card.js.map
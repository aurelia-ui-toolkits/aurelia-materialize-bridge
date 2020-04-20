import { __decorate, __metadata } from "tslib";
import * as au from "../aurelia";
import { deprecated } from "aurelia-framework";
var MdCard = /** @class */ (function () {
    function MdCard(element) {
        this.element = element;
        this.image = null;
        this.size = "";
    }
    MdCard.prototype.titleChanged = function () {
        this.mdTitle = this.title;
    };
    __decorate([
        au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        __metadata("design:type", Boolean)
    ], MdCard.prototype, "horizontal", void 0);
    __decorate([
        au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], MdCard.prototype, "image", void 0);
    __decorate([
        au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        __metadata("design:type", Boolean)
    ], MdCard.prototype, "reveal", void 0);
    __decorate([
        au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        __metadata("design:type", Boolean)
    ], MdCard.prototype, "action", void 0);
    __decorate([
        au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        __metadata("design:type", Boolean)
    ], MdCard.prototype, "stickyAction", void 0);
    __decorate([
        au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], MdCard.prototype, "size", void 0);
    __decorate([
        au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], MdCard.prototype, "title", void 0);
    __decorate([
        deprecated({ error: false, message: "Please use md-title instead." }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MdCard.prototype, "titleChanged", null);
    __decorate([
        au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], MdCard.prototype, "mdTitle", void 0);
    __decorate([
        au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], MdCard.prototype, "mdClass", void 0);
    MdCard = __decorate([
        au.customElement("md-card"),
        au.autoinject,
        __metadata("design:paramtypes", [Element])
    ], MdCard);
    return MdCard;
}());
export { MdCard };
//# sourceMappingURL=card.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../aurelia");
var aurelia_framework_1 = require("aurelia-framework");
var MdCard = /** @class */ (function () {
    function MdCard(element) {
        this.element = element;
        this.image = null;
        this.size = "";
    }
    MdCard.prototype.titleChanged = function () {
        this.mdTitle = this.title;
    };
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
        aurelia_framework_1.deprecated({ error: false, message: "Please use md-title instead." }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], MdCard.prototype, "titleChanged", null);
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
//# sourceMappingURL=card.js.map
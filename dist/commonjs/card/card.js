"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var aurelia_framework_1 = require("aurelia-framework");
var attributes_1 = require("../common/attributes");
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
        this.mdHorizontal = attributes_1.getBooleanFromAttributeValue(this.mdHorizontal);
        this.mdReveal = attributes_1.getBooleanFromAttributeValue(this.mdReveal);
        this.mdAction = attributes_1.getBooleanFromAttributeValue(this.mdAction);
        this.mdStickyAction = attributes_1.getBooleanFromAttributeValue(this.mdStickyAction);
    };
    tslib_1.__decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdCard.prototype, "mdHorizontal", void 0);
    tslib_1.__decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdCard.prototype, "mdImage", void 0);
    tslib_1.__decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdCard.prototype, "mdReveal", void 0);
    tslib_1.__decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdCard.prototype, "mdAction", void 0);
    tslib_1.__decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], MdCard.prototype, "mdStickyAction", void 0);
    tslib_1.__decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        tslib_1.__metadata("design:type", String)
    ], MdCard.prototype, "mdSize", void 0);
    tslib_1.__decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", String)
    ], MdCard.prototype, "mdTitle", void 0);
    tslib_1.__decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", String)
    ], MdCard.prototype, "mdClass", void 0);
    MdCard = tslib_1.__decorate([
        aurelia_framework_1.customElement("md-card"),
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdCard);
    return MdCard;
}());
exports.MdCard = MdCard;
//# sourceMappingURL=card.js.map
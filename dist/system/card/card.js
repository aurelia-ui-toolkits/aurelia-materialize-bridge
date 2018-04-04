System.register(["tslib", "aurelia-framework", "../common/attributes"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, aurelia_framework_1, attributes_1, MdCard;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (attributes_1_1) {
                attributes_1 = attributes_1_1;
            }
        ],
        execute: function () {
            MdCard = /** @class */ (function () {
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
            exports_1("MdCard", MdCard);
        }
    };
});

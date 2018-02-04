System.register(["aurelia-framework", "../common/attributes"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, attributes_1, MdCard;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (attributes_1_1) {
                attributes_1 = attributes_1_1;
            }
        ],
        execute: function () {
            MdCard = class MdCard {
                constructor(element) {
                    this.element = element;
                    this.mdImage = null;
                    this.mdReveal = false;
                    this.mdAction = false;
                    this.mdStickyAction = false;
                    this.mdSize = "";
                }
                attached() {
                    this.mdHorizontal = attributes_1.getBooleanFromAttributeValue(this.mdHorizontal);
                    this.mdReveal = attributes_1.getBooleanFromAttributeValue(this.mdReveal);
                    this.mdAction = attributes_1.getBooleanFromAttributeValue(this.mdAction);
                    this.mdStickyAction = attributes_1.getBooleanFromAttributeValue(this.mdStickyAction);
                }
            };
            __decorate([
                aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
            ], MdCard.prototype, "mdHorizontal", void 0);
            __decorate([
                aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
            ], MdCard.prototype, "mdImage", void 0);
            __decorate([
                aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
            ], MdCard.prototype, "mdReveal", void 0);
            __decorate([
                aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
            ], MdCard.prototype, "mdAction", void 0);
            __decorate([
                aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
            ], MdCard.prototype, "mdStickyAction", void 0);
            __decorate([
                aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay })
            ], MdCard.prototype, "mdSize", void 0);
            __decorate([
                aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
            ], MdCard.prototype, "mdTitle", void 0);
            __decorate([
                aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
            ], MdCard.prototype, "mdClass", void 0);
            MdCard = __decorate([
                aurelia_framework_1.customElement("md-card"),
                aurelia_framework_1.autoinject
            ], MdCard);
            exports_1("MdCard", MdCard);
        }
    };
});

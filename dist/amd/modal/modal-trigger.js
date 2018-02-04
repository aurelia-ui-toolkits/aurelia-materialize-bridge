var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../common/attributes", "../common/attributeManager", "../common/events"], function (require, exports, aurelia_framework_1, attributes_1, attributeManager_1, events_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let MdModalTrigger = class MdModalTrigger {
        constructor(element) {
            this.element = element;
            this.dismissible = true;
            this.attributeManager = new attributeManager_1.AttributeManager(this.element);
            this.onComplete = this.onComplete.bind(this);
        }
        attached() {
            this.attributeManager.addClasses("modal-trigger");
            $(this.element).leanModal({
                complete: this.onComplete,
                dismissible: attributes_1.getBooleanFromAttributeValue(this.dismissible)
            });
        }
        detached() {
            this.attributeManager.removeClasses("modal-trigger");
        }
        onComplete() {
            events_1.fireMaterializeEvent(this.element, "modal-complete");
        }
    };
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Object)
    ], MdModalTrigger.prototype, "dismissible", void 0);
    MdModalTrigger = __decorate([
        aurelia_framework_1.customAttribute("md-modal-trigger"),
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [Element])
    ], MdModalTrigger);
    exports.MdModalTrigger = MdModalTrigger;
});

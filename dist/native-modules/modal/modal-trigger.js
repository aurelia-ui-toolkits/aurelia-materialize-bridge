var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { bindable, customAttribute, autoinject } from "aurelia-framework";
import { getBooleanFromAttributeValue } from "../common/attributes";
import { AttributeManager } from "../common/attributeManager";
import { fireMaterializeEvent } from "../common/events";
let MdModalTrigger = class MdModalTrigger {
    constructor(element) {
        this.element = element;
        this.dismissible = true;
        this.attributeManager = new AttributeManager(this.element);
        this.onComplete = this.onComplete.bind(this);
    }
    attached() {
        this.attributeManager.addClasses("modal-trigger");
        $(this.element).leanModal({
            complete: this.onComplete,
            dismissible: getBooleanFromAttributeValue(this.dismissible)
        });
    }
    detached() {
        this.attributeManager.removeClasses("modal-trigger");
    }
    onComplete() {
        fireMaterializeEvent(this.element, "modal-complete");
    }
};
__decorate([
    bindable()
], MdModalTrigger.prototype, "dismissible", void 0);
MdModalTrigger = __decorate([
    customAttribute("md-modal-trigger"),
    autoinject
], MdModalTrigger);
export { MdModalTrigger };

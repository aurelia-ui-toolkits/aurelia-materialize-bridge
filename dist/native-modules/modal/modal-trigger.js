import * as tslib_1 from "tslib";
import { bindable, customAttribute, autoinject } from "aurelia-framework";
import { getBooleanFromAttributeValue } from "../common/attributes";
import { AttributeManager } from "../common/attributeManager";
import { fireMaterializeEvent } from "../common/events";
var MdModalTrigger = /** @class */ (function () {
    function MdModalTrigger(element) {
        this.element = element;
        this.dismissible = true;
        this.attributeManager = new AttributeManager(this.element);
        this.onComplete = this.onComplete.bind(this);
    }
    MdModalTrigger.prototype.attached = function () {
        this.attributeManager.addClasses("modal-trigger");
        $(this.element).leanModal({
            complete: this.onComplete,
            dismissible: getBooleanFromAttributeValue(this.dismissible)
        });
    };
    MdModalTrigger.prototype.detached = function () {
        this.attributeManager.removeClasses("modal-trigger");
    };
    MdModalTrigger.prototype.onComplete = function () {
        fireMaterializeEvent(this.element, "modal-complete");
    };
    tslib_1.__decorate([
        bindable(),
        tslib_1.__metadata("design:type", Object)
    ], MdModalTrigger.prototype, "dismissible", void 0);
    MdModalTrigger = tslib_1.__decorate([
        customAttribute("md-modal-trigger"),
        autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdModalTrigger);
    return MdModalTrigger;
}());
export { MdModalTrigger };
//# sourceMappingURL=modal-trigger.js.map
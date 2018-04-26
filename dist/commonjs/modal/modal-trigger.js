"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var aurelia_framework_1 = require("aurelia-framework");
var attributes_1 = require("../common/attributes");
var attributeManager_1 = require("../common/attributeManager");
var events_1 = require("../common/events");
var MdModalTrigger = /** @class */ (function () {
    function MdModalTrigger(element) {
        this.element = element;
        this.dismissible = true;
        this.attributeManager = new attributeManager_1.AttributeManager(this.element);
        this.onComplete = this.onComplete.bind(this);
    }
    MdModalTrigger.prototype.attached = function () {
        this.attributeManager.addClasses("modal-trigger");
        $(this.element).leanModal({
            complete: this.onComplete,
            dismissible: attributes_1.getBooleanFromAttributeValue(this.dismissible)
        });
    };
    MdModalTrigger.prototype.detached = function () {
        this.attributeManager.removeClasses("modal-trigger");
    };
    MdModalTrigger.prototype.onComplete = function () {
        events_1.fireMaterializeEvent(this.element, "modal-complete");
    };
    tslib_1.__decorate([
        aurelia_framework_1.bindable(),
        tslib_1.__metadata("design:type", Object)
    ], MdModalTrigger.prototype, "dismissible", void 0);
    MdModalTrigger = tslib_1.__decorate([
        aurelia_framework_1.customAttribute("md-modal-trigger"),
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdModalTrigger);
    return MdModalTrigger;
}());
exports.MdModalTrigger = MdModalTrigger;
//# sourceMappingURL=modal-trigger.js.map
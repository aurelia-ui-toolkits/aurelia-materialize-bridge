import * as tslib_1 from "tslib";
import { getLogger } from "aurelia-logging";
import { bindable, customAttribute, autoinject } from "aurelia-framework";
import { getBooleanFromAttributeValue } from "../common/attributes";
import { AttributeManager } from "../common/attributeManager";
import { fireMaterializeEvent } from "../common/events";
var MdModal = /** @class */ (function () {
    function MdModal(element) {
        this.element = element;
        this.dismissible = true;
        this.opacity = 0.5; // Opacity of modal background
        this.inDuration = 300; // Transition in duration
        this.outDuration = 200; // Transition out duration
        this.startingTop = "4%"; // Starting top style attribute
        this.endingTop = "10%"; // Ending top style attribute
        this.log = getLogger("md-modal");
        this.attributeManager = new AttributeManager(this.element);
        this.onComplete = this.onComplete.bind(this);
        this.onReady = this.onReady.bind(this);
    }
    MdModal.prototype.attached = function () {
        var options = {
            complete: this.onComplete,
            dismissible: getBooleanFromAttributeValue(this.dismissible),
            endingTop: this.endingTop,
            inDuration: parseInt(this.inDuration.toString(), 10),
            opacity: parseFloat(this.opacity.toString()),
            outDuration: parseInt(this.outDuration.toString(), 10),
            ready: this.onReady,
            startingTop: this.startingTop
        };
        this.log.debug("modal options: ", options);
        this.attributeManager.addClasses("modal");
        $(this.element).modal(options);
    };
    MdModal.prototype.detached = function () {
        this.attributeManager.removeClasses("modal");
    };
    MdModal.prototype.onComplete = function () {
        fireMaterializeEvent(this.element, "modal-complete");
    };
    MdModal.prototype.onReady = function (modal, trigger) {
        fireMaterializeEvent(this.element, "modal-ready", { modal: modal, trigger: trigger });
    };
    MdModal.prototype.open = function () {
        $(this.element).modal("open");
    };
    MdModal.prototype.close = function () {
        $(this.element).modal("close");
    };
    tslib_1.__decorate([
        bindable(),
        tslib_1.__metadata("design:type", Object)
    ], MdModal.prototype, "dismissible", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdModal.prototype, "opacity", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdModal.prototype, "inDuration", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdModal.prototype, "outDuration", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", String)
    ], MdModal.prototype, "startingTop", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", String)
    ], MdModal.prototype, "endingTop", void 0);
    MdModal = tslib_1.__decorate([
        customAttribute("md-modal"),
        autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdModal);
    return MdModal;
}());
export { MdModal };
//# sourceMappingURL=modal.js.map
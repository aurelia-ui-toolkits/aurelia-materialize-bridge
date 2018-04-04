define(["require", "exports", "tslib", "aurelia-logging", "aurelia-framework", "../common/attributes", "../common/attributeManager", "../common/events"], function (require, exports, tslib_1, aurelia_logging_1, aurelia_framework_1, attributes_1, attributeManager_1, events_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdModal = /** @class */ (function () {
        function MdModal(element) {
            this.element = element;
            this.dismissible = true;
            this.opacity = 0.5; // Opacity of modal background
            this.inDuration = 300; // Transition in duration
            this.outDuration = 200; // Transition out duration
            this.startingTop = "4%"; // Starting top style attribute
            this.endingTop = "10%"; // Ending top style attribute
            this.log = aurelia_logging_1.getLogger("md-modal");
            this.attributeManager = new attributeManager_1.AttributeManager(this.element);
            this.onComplete = this.onComplete.bind(this);
            this.onReady = this.onReady.bind(this);
        }
        MdModal.prototype.attached = function () {
            var options = {
                complete: this.onComplete,
                dismissible: attributes_1.getBooleanFromAttributeValue(this.dismissible),
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
            events_1.fireMaterializeEvent(this.element, "modal-complete");
        };
        MdModal.prototype.onReady = function (modal, trigger) {
            events_1.fireMaterializeEvent(this.element, "modal-ready", { modal: modal, trigger: trigger });
        };
        MdModal.prototype.open = function () {
            $(this.element).modal("open");
        };
        MdModal.prototype.close = function () {
            $(this.element).modal("close");
        };
        tslib_1.__decorate([
            aurelia_framework_1.bindable(),
            tslib_1.__metadata("design:type", Object)
        ], MdModal.prototype, "dismissible", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", Object)
        ], MdModal.prototype, "opacity", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", Object)
        ], MdModal.prototype, "inDuration", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", Object)
        ], MdModal.prototype, "outDuration", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", String)
        ], MdModal.prototype, "startingTop", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", String)
        ], MdModal.prototype, "endingTop", void 0);
        MdModal = tslib_1.__decorate([
            aurelia_framework_1.customAttribute("md-modal"),
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element])
        ], MdModal);
        return MdModal;
    }());
    exports.MdModal = MdModal;
});

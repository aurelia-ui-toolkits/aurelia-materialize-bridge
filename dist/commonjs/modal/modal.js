"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../aurelia");
var MdModal = /** @class */ (function () {
    function MdModal(element) {
        this.element = element;
        this.log = au.getLogger("md-modal");
        this.attributeManager = new au.AttributeManager(this.element);
    }
    MdModal.prototype.fixedFooterChanged = function () {
        if (this.element) {
            this.element.classList.toggle("modal-fixed-footer", this.fixedFooter);
        }
    };
    MdModal.prototype.attached = function () {
        var _this = this;
        var options = {
            opacity: this.opacity,
            inDuration: this.inDuration,
            outDuration: this.outDuration,
            preventScrolling: this.preventScrolling,
            dismissible: this.dismissible,
            startingTop: this.startingTop,
            endingTop: this.endingTop,
            onOpenStart: function () { return au.fireMaterializeEvent(_this.element, "open-start"); },
            onOpenEnd: function () { return au.fireMaterializeEvent(_this.element, "open-end"); },
            onCloseStart: function () { return au.fireMaterializeEvent(_this.element, "close-start"); },
            onCloseEnd: function () { return au.fireMaterializeEvent(_this.element, "close-end"); }
        };
        this.log.debug("modal options: ", options);
        au.cleanOptions(options);
        this.attributeManager.addClasses("modal");
        this.instance = new M.Modal(this.element, options);
    };
    MdModal.prototype.detached = function () {
        this.instance.destroy();
        this.attributeManager.removeClasses("modal");
    };
    MdModal.prototype.open = function () {
        this.instance.open();
    };
    MdModal.prototype.close = function () {
        this.instance.close();
    };
    tslib_1.__decorate([
        au.ato.bindable.numberMd,
        tslib_1.__metadata("design:type", Number)
    ], MdModal.prototype, "opacity", void 0);
    tslib_1.__decorate([
        au.ato.bindable.numberMd,
        tslib_1.__metadata("design:type", Number)
    ], MdModal.prototype, "inDuration", void 0);
    tslib_1.__decorate([
        au.ato.bindable.numberMd,
        tslib_1.__metadata("design:type", Number)
    ], MdModal.prototype, "outDuration", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], MdModal.prototype, "preventScrolling", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], MdModal.prototype, "dismissible", void 0);
    tslib_1.__decorate([
        au.ato.bindable.stringMd,
        tslib_1.__metadata("design:type", String)
    ], MdModal.prototype, "startingTop", void 0);
    tslib_1.__decorate([
        au.ato.bindable.stringMd,
        tslib_1.__metadata("design:type", String)
    ], MdModal.prototype, "endingTop", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], MdModal.prototype, "fixedFooter", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], MdModal.prototype, "bottomSheet", void 0);
    MdModal = tslib_1.__decorate([
        au.customAttribute("md-modal"),
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdModal);
    return MdModal;
}());
exports.MdModal = MdModal;
//# sourceMappingURL=modal.js.map
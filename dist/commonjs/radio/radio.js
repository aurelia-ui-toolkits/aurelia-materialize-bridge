"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../aurelia");
var MdRadio = /** @class */ (function () {
    function MdRadio(element) {
        this.element = element;
        this.disabled = false;
        this.readonly = false;
        this.gap = false;
        this.name = "";
        this.value = "";
        this.controlId = "md-radio-" + MdRadio_1.id++;
    }
    MdRadio_1 = MdRadio;
    MdRadio.prototype.disabledChanged = function (newValue) {
        if (this.radio) {
            this.radio.disabled = newValue;
        }
    };
    MdRadio.prototype.attached = function () {
        this.attributeManager = new au.AttributeManager(this.radio);
        if (this.gap) {
            this.attributeManager.addClasses("with-gap");
        }
        if (this.disabled) {
            this.radio.disabled = true;
        }
    };
    MdRadio.prototype.detached = function () {
        this.attributeManager.removeClasses(["with-gap", "disabled"]);
    };
    var MdRadio_1;
    MdRadio.id = 0;
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.twoWay }),
        tslib_1.__metadata("design:type", Object)
    ], MdRadio.prototype, "checked", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], MdRadio.prototype, "disabled", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], MdRadio.prototype, "readonly", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], MdRadio.prototype, "gap", void 0);
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdRadio.prototype, "model", void 0);
    tslib_1.__decorate([
        au.ato.bindable.stringMd,
        tslib_1.__metadata("design:type", String)
    ], MdRadio.prototype, "name", void 0);
    tslib_1.__decorate([
        au.ato.bindable.stringMd,
        tslib_1.__metadata("design:type", String)
    ], MdRadio.prototype, "value", void 0);
    MdRadio = MdRadio_1 = tslib_1.__decorate([
        au.customElement("md-radio"),
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdRadio);
    return MdRadio;
}());
exports.MdRadio = MdRadio;
//# sourceMappingURL=radio.js.map
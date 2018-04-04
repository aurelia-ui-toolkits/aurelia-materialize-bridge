"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var aurelia_framework_1 = require("aurelia-framework");
var attributeManager_1 = require("../common/attributeManager");
var attributes_1 = require("../common/attributes");
var MdRadio = /** @class */ (function () {
    function MdRadio(element) {
        this.element = element;
        this.mdDisabled = false;
        this.mdReadonly = false;
        this.mdGap = false;
        this.mdName = "";
        this.mdValue = "";
        this.controlId = "md-radio-" + MdRadio_1.id++;
        // this.handleChange = this.handleChange.bind(this);
    }
    MdRadio_1 = MdRadio;
    MdRadio.prototype.mdDisabledChanged = function (newValue) {
        if (this.radio) {
            this.radio.disabled = !!newValue;
        }
    };
    MdRadio.prototype.attached = function () {
        this.attributeManager = new attributeManager_1.AttributeManager(this.radio);
        if (attributes_1.getBooleanFromAttributeValue(this.mdGap)) {
            this.attributeManager.addClasses("with-gap");
        }
        if (attributes_1.getBooleanFromAttributeValue(this.mdDisabled)) {
            this.radio.disabled = true;
        }
        this.mdReadonly = attributes_1.getBooleanFromAttributeValue(this.mdReadonly);
    };
    MdRadio.prototype.detached = function () {
        this.attributeManager.removeClasses(["with-gap", "disabled"]);
    };
    MdRadio.id = 0;
    tslib_1.__decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        tslib_1.__metadata("design:type", Object)
    ], MdRadio.prototype, "mdChecked", void 0);
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdRadio.prototype, "mdDisabled", void 0);
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdRadio.prototype, "mdReadonly", void 0);
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdRadio.prototype, "mdGap", void 0);
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdRadio.prototype, "mdModel", void 0);
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", String)
    ], MdRadio.prototype, "mdName", void 0);
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", String)
    ], MdRadio.prototype, "mdValue", void 0);
    MdRadio = MdRadio_1 = tslib_1.__decorate([
        aurelia_framework_1.customElement("md-radio"),
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdRadio);
    return MdRadio;
    var MdRadio_1;
}());
exports.MdRadio = MdRadio;

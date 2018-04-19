"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_typed_observable_plugin_1 = require("aurelia-typed-observable-plugin");
var attributeManager_1 = require("../common/attributeManager");
var MdButton = /** @class */ (function () {
    function MdButton(element) {
        this.element = element;
        this.disabled = false;
        this.flat = false;
        this.floating = false;
        this.large = false;
        this.small = false;
        this.pulse = false;
        this.attributeManager = new attributeManager_1.AttributeManager(element);
    }
    MdButton.prototype.disabledChanged = function (newValue) {
        if (newValue) {
            this.attributeManager.addClasses("disabled");
        }
        else {
            this.attributeManager.removeClasses("disabled");
        }
    };
    MdButton.prototype.flatChanged = function (newValue) {
        if (newValue) {
            this.attributeManager.addClasses("btn-flat");
        }
        else {
            this.attributeManager.removeClasses("btn-flat");
        }
    };
    MdButton.prototype.pulseChanged = function (newValue) {
        if (newValue) {
            this.attributeManager.addClasses("pulse");
        }
        else {
            this.attributeManager.removeClasses("pulse");
        }
    };
    MdButton.prototype.attached = function () {
        var classes = [];
        if (this.flat) {
            classes.push("btn-flat");
        }
        if (this.floating) {
            classes.push("btn-floating");
        }
        if (this.large) {
            classes.push("btn-large");
        }
        if (this.small) {
            classes.push("btn-small");
        }
        if (this.disabled) {
            classes.push("disabled");
        }
        if (this.pulse) {
            classes.push("pulse");
        }
        classes.push("btn");
        this.attributeManager.addClasses(classes);
    };
    MdButton.prototype.detached = function () {
        this.attributeManager.removeClasses(["accent", "btn", "btn-flat", "btn-large", "disabled", "pulse"]);
    };
    tslib_1.__decorate([
        aurelia_typed_observable_plugin_1.bindable,
        tslib_1.__metadata("design:type", Boolean)
    ], MdButton.prototype, "disabled", void 0);
    tslib_1.__decorate([
        aurelia_typed_observable_plugin_1.bindable,
        tslib_1.__metadata("design:type", Boolean)
    ], MdButton.prototype, "flat", void 0);
    tslib_1.__decorate([
        aurelia_typed_observable_plugin_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdButton.prototype, "floating", void 0);
    tslib_1.__decorate([
        aurelia_typed_observable_plugin_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdButton.prototype, "large", void 0);
    tslib_1.__decorate([
        aurelia_typed_observable_plugin_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdButton.prototype, "small", void 0);
    tslib_1.__decorate([
        aurelia_typed_observable_plugin_1.bindable,
        tslib_1.__metadata("design:type", Boolean)
    ], MdButton.prototype, "pulse", void 0);
    MdButton = tslib_1.__decorate([
        aurelia_framework_1.customAttribute("md-button"),
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdButton);
    return MdButton;
}());
exports.MdButton = MdButton;

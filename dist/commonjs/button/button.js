"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../aurelia");
var MdButton = /** @class */ (function () {
    function MdButton(element) {
        this.element = element;
        this.disabled = false;
        this.flat = false;
        this.floating = false;
        this.large = false;
        this.small = false;
        this.pulse = false;
        this.attributeManager = new au.AttributeManager(element);
    }
    MdButton.prototype.disabledChanged = function () {
        if (this.disabled) {
            this.attributeManager.addClasses("disabled");
        }
        else {
            this.attributeManager.removeClasses("disabled");
        }
    };
    MdButton.prototype.flatChanged = function () {
        if (this.flat) {
            this.attributeManager.addClasses("btn-flat");
        }
        else {
            this.attributeManager.removeClasses("btn-flat");
        }
    };
    MdButton.prototype.pulseChanged = function () {
        if (this.pulse) {
            this.attributeManager.addClasses("pulse");
        }
        else {
            this.attributeManager.removeClasses("pulse");
        }
    };
    MdButton.prototype.attached = function () {
        var classes = [];
        this.flatChanged();
        if (this.floating) {
            classes.push("btn-floating");
        }
        if (this.large) {
            classes.push("btn-large");
        }
        if (this.small) {
            classes.push("btn-small");
        }
        this.disabledChanged();
        this.pulseChanged();
        classes.push("btn");
        this.attributeManager.addClasses(classes);
    };
    MdButton.prototype.detached = function () {
        this.attributeManager.removeClasses(["btn", "btn-flat", "btn-large", "disabled", "pulse"]);
    };
    tslib_1.__decorate([
        au.ato.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], MdButton.prototype, "disabled", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], MdButton.prototype, "flat", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdButton.prototype, "floating", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdButton.prototype, "large", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdButton.prototype, "small", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], MdButton.prototype, "pulse", void 0);
    MdButton = tslib_1.__decorate([
        au.customAttribute("md-button"),
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdButton);
    return MdButton;
}());
exports.MdButton = MdButton;
//# sourceMappingURL=button.js.map
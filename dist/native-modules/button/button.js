import * as tslib_1 from "tslib";
import { autoinject, bindable, customAttribute } from "aurelia-framework";
import { AttributeManager } from "../common/attributeManager";
import { getBooleanFromAttributeValue } from "../common/attributes";
var MdButton = /** @class */ (function () {
    function MdButton(element) {
        this.element = element;
        this.disabled = false;
        this.flat = false;
        this.floating = false;
        this.large = false;
        this.pulse = false;
        this.attributeManager = new AttributeManager(element);
    }
    MdButton.prototype.disabledChanged = function (newValue) {
        if (getBooleanFromAttributeValue(newValue)) {
            this.attributeManager.addClasses("disabled");
        }
        else {
            this.attributeManager.removeClasses("disabled");
        }
    };
    MdButton.prototype.flatChanged = function (newValue) {
        if (getBooleanFromAttributeValue(newValue)) {
            this.attributeManager.removeClasses(["btn", "accent"]);
            this.attributeManager.addClasses("btn-flat");
        }
        else {
            this.attributeManager.removeClasses("btn-flat");
            this.attributeManager.addClasses(["btn", "accent"]);
        }
    };
    MdButton.prototype.pulseChanged = function (newValue) {
        if (getBooleanFromAttributeValue(newValue)) {
            this.attributeManager.addClasses("pulse");
        }
        else {
            this.attributeManager.removeClasses("pulse");
        }
    };
    MdButton.prototype.attached = function () {
        var classes = [];
        if (getBooleanFromAttributeValue(this.flat)) {
            classes.push("btn-flat");
        }
        if (getBooleanFromAttributeValue(this.floating)) {
            classes.push("btn-floating");
        }
        if (getBooleanFromAttributeValue(this.large)) {
            classes.push("btn-large");
        }
        if (classes.length === 0) {
            classes.push("btn");
        }
        if (getBooleanFromAttributeValue(this.disabled)) {
            classes.push("disabled");
        }
        if (!getBooleanFromAttributeValue(this.flat)) {
            classes.push("accent");
        }
        if (getBooleanFromAttributeValue(this.pulse)) {
            classes.push("pulse");
        }
        this.attributeManager.addClasses(classes);
    };
    MdButton.prototype.detached = function () {
        this.attributeManager.removeClasses(["accent", "btn", "btn-flat", "btn-large", "disabled", "pulse"]);
    };
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdButton.prototype, "disabled", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdButton.prototype, "flat", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdButton.prototype, "floating", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdButton.prototype, "large", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdButton.prototype, "pulse", void 0);
    MdButton = tslib_1.__decorate([
        customAttribute("md-button"),
        autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdButton);
    return MdButton;
}());
export { MdButton };

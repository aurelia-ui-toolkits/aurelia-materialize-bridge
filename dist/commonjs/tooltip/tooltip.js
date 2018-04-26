"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_typed_observable_plugin_1 = require("aurelia-typed-observable-plugin");
var MdTooltip = /** @class */ (function () {
    function MdTooltip(element) {
        this.element = element;
        this.position = "bottom";
        this.delay = 50;
        this.text = "";
    }
    MdTooltip.prototype.textChanged = function () {
        this.initTooltip();
    };
    MdTooltip.prototype.attached = function () {
        this.initTooltip();
    };
    MdTooltip.prototype.detached = function () {
        this.instance.destroy();
    };
    MdTooltip.prototype.initTooltip = function () {
        this.instance = new M.Tooltip(this.element, { exitDelay: this.delay, html: this.text, position: this.position });
    };
    tslib_1.__decorate([
        aurelia_typed_observable_plugin_1.bindable,
        tslib_1.__metadata("design:type", String)
    ], MdTooltip.prototype, "position", void 0);
    tslib_1.__decorate([
        aurelia_typed_observable_plugin_1.bindable,
        tslib_1.__metadata("design:type", Number)
    ], MdTooltip.prototype, "delay", void 0);
    tslib_1.__decorate([
        aurelia_typed_observable_plugin_1.bindable,
        tslib_1.__metadata("design:type", String)
    ], MdTooltip.prototype, "text", void 0);
    MdTooltip = tslib_1.__decorate([
        aurelia_framework_1.customAttribute("md-tooltip"),
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdTooltip);
    return MdTooltip;
}());
exports.MdTooltip = MdTooltip;
//# sourceMappingURL=tooltip.js.map
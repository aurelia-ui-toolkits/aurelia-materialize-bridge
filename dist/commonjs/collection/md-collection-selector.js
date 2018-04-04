"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var aurelia_framework_1 = require("aurelia-framework");
var attributes_1 = require("../common/attributes");
var events_1 = require("../common/events");
var MdCollectionSelector = /** @class */ (function () {
    function MdCollectionSelector(element) {
        this.element = element;
        this.mdDisabled = false;
        this.isSelected = false;
    }
    MdCollectionSelector.prototype.mdDisabledChanged = function (newValue) {
        this.mdDisabled = attributes_1.getBooleanFromAttributeValue(newValue);
    };
    MdCollectionSelector.prototype.isSelectedChanged = function (newValue) {
        events_1.fireMaterializeEvent(this.element, "selection-changed", { item: this.item, isSelected: this.isSelected });
    };
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdCollectionSelector.prototype, "item", void 0);
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdCollectionSelector.prototype, "mdDisabled", void 0);
    tslib_1.__decorate([
        aurelia_framework_1.observable,
        tslib_1.__metadata("design:type", Object)
    ], MdCollectionSelector.prototype, "isSelected", void 0);
    MdCollectionSelector = tslib_1.__decorate([
        aurelia_framework_1.customElement("md-collection-selector"),
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdCollectionSelector);
    return MdCollectionSelector;
}());
exports.MdCollectionSelector = MdCollectionSelector;

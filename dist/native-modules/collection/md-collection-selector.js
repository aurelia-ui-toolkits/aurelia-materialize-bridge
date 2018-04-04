import * as tslib_1 from "tslib";
import { autoinject, bindable, customElement, observable } from "aurelia-framework";
import { getBooleanFromAttributeValue } from "../common/attributes";
import { fireMaterializeEvent } from "../common/events";
var MdCollectionSelector = /** @class */ (function () {
    function MdCollectionSelector(element) {
        this.element = element;
        this.mdDisabled = false;
        this.isSelected = false;
    }
    MdCollectionSelector.prototype.mdDisabledChanged = function (newValue) {
        this.mdDisabled = getBooleanFromAttributeValue(newValue);
    };
    MdCollectionSelector.prototype.isSelectedChanged = function (newValue) {
        fireMaterializeEvent(this.element, "selection-changed", { item: this.item, isSelected: this.isSelected });
    };
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdCollectionSelector.prototype, "item", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdCollectionSelector.prototype, "mdDisabled", void 0);
    tslib_1.__decorate([
        observable,
        tslib_1.__metadata("design:type", Object)
    ], MdCollectionSelector.prototype, "isSelected", void 0);
    MdCollectionSelector = tslib_1.__decorate([
        customElement("md-collection-selector"),
        autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdCollectionSelector);
    return MdCollectionSelector;
}());
export { MdCollectionSelector };

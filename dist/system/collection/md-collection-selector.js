System.register(["tslib", "aurelia-framework", "../common/attributes", "../common/events"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, aurelia_framework_1, attributes_1, events_1, MdCollectionSelector;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (attributes_1_1) {
                attributes_1 = attributes_1_1;
            },
            function (events_1_1) {
                events_1 = events_1_1;
            }
        ],
        execute: function () {
            MdCollectionSelector = /** @class */ (function () {
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
            exports_1("MdCollectionSelector", MdCollectionSelector);
        }
    };
});

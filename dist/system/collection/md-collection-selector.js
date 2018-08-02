System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, MdCollectionSelector;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (au_1) {
                au = au_1;
            }
        ],
        execute: function () {
            MdCollectionSelector = /** @class */ (function () {
                function MdCollectionSelector(element) {
                    this.element = element;
                    this.mdDisabled = false;
                    this.isSelected = false;
                }
                MdCollectionSelector.prototype.isSelectedChanged = function (newValue) {
                    au.fireMaterializeEvent(this.element, "selection-changed", { item: this.item, isSelected: this.isSelected });
                };
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", Object)
                ], MdCollectionSelector.prototype, "item", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.booleanMd,
                    tslib_1.__metadata("design:type", Boolean)
                ], MdCollectionSelector.prototype, "mdDisabled", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.booleanMd,
                    tslib_1.__metadata("design:type", Boolean)
                ], MdCollectionSelector.prototype, "isSelected", void 0);
                MdCollectionSelector = tslib_1.__decorate([
                    au.customElement("md-collection-selector"),
                    au.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], MdCollectionSelector);
                return MdCollectionSelector;
            }());
            exports_1("MdCollectionSelector", MdCollectionSelector);
        }
    };
});
//# sourceMappingURL=md-collection-selector.js.map
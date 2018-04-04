System.register(["tslib", "aurelia-framework"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, aurelia_framework_1, MdCollectionItem;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }
        ],
        execute: function () {
            MdCollectionItem = /** @class */ (function () {
                function MdCollectionItem() {
                }
                MdCollectionItem = tslib_1.__decorate([
                    aurelia_framework_1.customElement("md-collection-item")
                ], MdCollectionItem);
                return MdCollectionItem;
            }());
            exports_1("MdCollectionItem", MdCollectionItem);
        }
    };
});

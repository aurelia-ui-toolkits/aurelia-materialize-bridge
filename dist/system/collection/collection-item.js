System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, MdCollectionItem;
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
            MdCollectionItem = /** @class */ (function () {
                function MdCollectionItem() {
                }
                MdCollectionItem = tslib_1.__decorate([
                    au.customElement("md-collection-item")
                ], MdCollectionItem);
                return MdCollectionItem;
            }());
            exports_1("MdCollectionItem", MdCollectionItem);
        }
    };
});
//# sourceMappingURL=collection-item.js.map
System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, MdCollectionHeader;
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
            MdCollectionHeader = /** @class */ (function () {
                function MdCollectionHeader() {
                }
                MdCollectionHeader = tslib_1.__decorate([
                    au.customElement("md-collection-header")
                ], MdCollectionHeader);
                return MdCollectionHeader;
            }());
            exports_1("MdCollectionHeader", MdCollectionHeader);
        }
    };
});
//# sourceMappingURL=collection-header.js.map
System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, MdWell;
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
            MdWell = /** @class */ (function () {
                function MdWell() {
                }
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", au.Router)
                ], MdWell.prototype, "router", void 0);
                return MdWell;
            }());
            exports_1("MdWell", MdWell);
        }
    };
});
//# sourceMappingURL=md-well.js.map
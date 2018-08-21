System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, ClickCounter;
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
            ClickCounter = /** @class */ (function () {
                function ClickCounter() {
                    this.count = 0;
                }
                ClickCounter.prototype.increment = function () {
                    this.count++;
                };
                ClickCounter = tslib_1.__decorate([
                    au.customElement("click-counter")
                ], ClickCounter);
                return ClickCounter;
            }());
            exports_1("ClickCounter", ClickCounter);
        }
    };
});
//# sourceMappingURL=click-counter.js.map
define(["require", "exports", "tslib", "../aurelia"], function (require, exports, tslib_1, au) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ClickCounter = /** @class */ (function () {
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
    exports.ClickCounter = ClickCounter;
});
//# sourceMappingURL=click-counter.js.map
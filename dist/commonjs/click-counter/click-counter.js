"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../aurelia");
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
//# sourceMappingURL=click-counter.js.map
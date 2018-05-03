import * as tslib_1 from "tslib";
import * as au from "../aurelia";
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
export { ClickCounter };
//# sourceMappingURL=click-counter.js.map
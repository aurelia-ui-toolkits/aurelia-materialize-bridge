import { __decorate } from "tslib";
import * as au from "../aurelia";
var ClickCounter = /** @class */ (function () {
    function ClickCounter() {
        this.count = 0;
    }
    ClickCounter.prototype.increment = function () {
        this.count++;
    };
    ClickCounter = __decorate([
        au.customElement("click-counter")
    ], ClickCounter);
    return ClickCounter;
}());
export { ClickCounter };
//# sourceMappingURL=click-counter.js.map
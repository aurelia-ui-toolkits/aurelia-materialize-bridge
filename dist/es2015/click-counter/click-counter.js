import * as tslib_1 from "tslib";
import * as au from "../aurelia";
let ClickCounter = class ClickCounter {
    constructor() {
        this.count = 0;
    }
    increment() {
        this.count++;
    }
};
ClickCounter = tslib_1.__decorate([
    au.customElement("click-counter")
], ClickCounter);
export { ClickCounter };
//# sourceMappingURL=click-counter.js.map
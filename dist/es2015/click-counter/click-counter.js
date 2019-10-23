import { __decorate } from "tslib";
import * as au from "../aurelia";
let ClickCounter = class ClickCounter {
    constructor() {
        this.count = 0;
    }
    increment() {
        this.count++;
    }
};
ClickCounter = __decorate([
    au.customElement("click-counter")
], ClickCounter);
export { ClickCounter };
//# sourceMappingURL=click-counter.js.map
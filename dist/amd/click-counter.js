define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ClickCounter {
        constructor() {
            this.count = 0;
        }
        increment() {
            this.count++;
        }
    }
    exports.ClickCounter = ClickCounter;
});

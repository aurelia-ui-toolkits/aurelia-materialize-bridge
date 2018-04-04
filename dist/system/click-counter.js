System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ClickCounter;
    return {
        setters: [],
        execute: function () {
            ClickCounter = /** @class */ (function () {
                function ClickCounter() {
                    this.count = 0;
                }
                ClickCounter.prototype.increment = function () {
                    this.count++;
                };
                return ClickCounter;
            }());
            exports_1("ClickCounter", ClickCounter);
        }
    };
});

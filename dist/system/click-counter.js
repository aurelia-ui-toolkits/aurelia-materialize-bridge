System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ClickCounter;
    return {
        setters: [],
        execute: function () {
            ClickCounter = class ClickCounter {
                constructor() {
                    this.count = 0;
                }
                increment() {
                    this.count++;
                }
            };
            exports_1("ClickCounter", ClickCounter);
        }
    };
});

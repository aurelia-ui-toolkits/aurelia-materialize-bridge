System.register(["tslib", "aurelia-router", "aurelia-templating"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, aurelia_router_1, aurelia_templating_1, MdWell;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (aurelia_router_1_1) {
                aurelia_router_1 = aurelia_router_1_1;
            },
            function (aurelia_templating_1_1) {
                aurelia_templating_1 = aurelia_templating_1_1;
            }
        ],
        execute: function () {
            MdWell = /** @class */ (function () {
                function MdWell() {
                }
                tslib_1.__decorate([
                    aurelia_templating_1.bindable,
                    tslib_1.__metadata("design:type", aurelia_router_1.Router)
                ], MdWell.prototype, "router", void 0);
                return MdWell;
            }());
            exports_1("MdWell", MdWell);
        }
    };
});

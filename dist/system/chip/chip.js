System.register(["tslib", "aurelia-framework", "../common/attributes", "../common/events"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, aurelia_framework_1, attributes_1, events_1, MdChip;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (attributes_1_1) {
                attributes_1 = attributes_1_1;
            },
            function (events_1_1) {
                events_1 = events_1_1;
            }
        ],
        execute: function () {
            MdChip = /** @class */ (function () {
                function MdChip(element) {
                    this.element = element;
                    this.mdClose = false;
                }
                MdChip.prototype.attached = function () {
                    this.mdClose = attributes_1.getBooleanFromAttributeValue(this.mdClose);
                };
                MdChip.prototype.close = function () {
                    this.element.parentElement.removeChild(this.element);
                    events_1.fireEvent(this.element, "close");
                };
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", Object)
                ], MdChip.prototype, "mdClose", void 0);
                MdChip = tslib_1.__decorate([
                    aurelia_framework_1.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], MdChip);
                return MdChip;
            }());
            exports_1("MdChip", MdChip);
        }
    };
});

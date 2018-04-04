System.register(["tslib", "aurelia-framework", "aurelia-logging"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, aurelia_framework_1, aurelia_logging_1, MdTapTarget;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_logging_1_1) {
                aurelia_logging_1 = aurelia_logging_1_1;
            }
        ],
        execute: function () {
            MdTapTarget = /** @class */ (function () {
                function MdTapTarget(element) {
                    this.element = element;
                    this.mdRef = null;
                    this.log = aurelia_logging_1.getLogger("md-tap-target");
                }
                MdTapTarget_1 = MdTapTarget;
                MdTapTarget.prototype.bind = function () {
                    if (!this.mdRef) {
                        throw new Error("md-tap-target needs a referenced element");
                    }
                    else {
                        var id = this.mdRef.getAttribute("id");
                        if (!id) {
                            id = "md-tap-target-" + MdTapTarget_1.controlId++;
                            this.mdRef.setAttribute("id", id);
                        }
                        this.element.setAttribute("data-activates", id);
                    }
                };
                MdTapTarget.prototype.open = function () {
                    $(this.element).tapTarget("open");
                };
                MdTapTarget.prototype.close = function () {
                    $(this.element).tapTarget("close");
                };
                MdTapTarget.controlId = 0;
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", HTMLElement)
                ], MdTapTarget.prototype, "mdRef", void 0);
                MdTapTarget = MdTapTarget_1 = tslib_1.__decorate([
                    aurelia_framework_1.customElement("md-tap-target"),
                    aurelia_framework_1.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], MdTapTarget);
                return MdTapTarget;
                var MdTapTarget_1;
            }());
            exports_1("MdTapTarget", MdTapTarget);
        }
    };
});

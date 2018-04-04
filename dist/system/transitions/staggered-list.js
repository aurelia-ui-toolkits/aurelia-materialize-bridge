System.register(["tslib", "aurelia-framework", "aurelia-logging"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tslib_1, aurelia_framework_1, aurelia_logging_1, MdStaggeredList;
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
            MdStaggeredList = /** @class */ (function () {
                function MdStaggeredList(element) {
                    this.element = element;
                    this.staggerList = this.staggerList.bind(this);
                    this.log = aurelia_logging_1.getLogger("md-staggered-list");
                }
                MdStaggeredList.prototype.attached = function () {
                    this.element.addEventListener("click", this.staggerList);
                    this.ensureOpacity();
                };
                MdStaggeredList.prototype.detached = function () {
                    this.element.removeEventListener("click", this.staggerList);
                };
                MdStaggeredList.prototype.staggerList = function () {
                    Materialize.showStaggeredList($(this.ref));
                };
                MdStaggeredList.prototype.ensureOpacity = function () {
                    var items = this.ref.querySelectorAll("li");
                    [].forEach.call(items, function (item) {
                        var opacity = window.getComputedStyle(item).opacity;
                        if (opacity !== "0") {
                            item.style.opacity = 0;
                        }
                    });
                };
                tslib_1.__decorate([
                    aurelia_framework_1.bindable,
                    tslib_1.__metadata("design:type", HTMLElement)
                ], MdStaggeredList.prototype, "ref", void 0);
                MdStaggeredList = tslib_1.__decorate([
                    aurelia_framework_1.customAttribute("md-staggered-list"),
                    aurelia_framework_1.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], MdStaggeredList);
                return MdStaggeredList;
            }());
            exports_1("MdStaggeredList", MdStaggeredList);
        }
    };
});

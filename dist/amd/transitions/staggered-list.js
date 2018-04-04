define(["require", "exports", "tslib", "aurelia-framework", "aurelia-logging"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_logging_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdStaggeredList = /** @class */ (function () {
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
    exports.MdStaggeredList = MdStaggeredList;
});

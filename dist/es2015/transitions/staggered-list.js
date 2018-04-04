import * as tslib_1 from "tslib";
import { bindable, customAttribute, autoinject } from "aurelia-framework";
import { getLogger } from "aurelia-logging";
var MdStaggeredList = /** @class */ (function () {
    function MdStaggeredList(element) {
        this.element = element;
        this.staggerList = this.staggerList.bind(this);
        this.log = getLogger("md-staggered-list");
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
        bindable,
        tslib_1.__metadata("design:type", HTMLElement)
    ], MdStaggeredList.prototype, "ref", void 0);
    MdStaggeredList = tslib_1.__decorate([
        customAttribute("md-staggered-list"),
        autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdStaggeredList);
    return MdStaggeredList;
}());
export { MdStaggeredList };

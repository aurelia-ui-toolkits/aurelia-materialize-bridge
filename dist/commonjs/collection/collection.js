"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../aurelia");
var MdCollection = /** @class */ (function () {
    function MdCollection(element) {
        this.element = element;
    }
    MdCollection.prototype.attached = function () {
        var header = this.element.querySelector("md-collection-header");
        if (header) {
            this.anchor.classList.add("with-header");
        }
    };
    MdCollection.prototype.getSelected = function () {
        var items = Array.from(this.element.querySelectorAll("md-collection-selector"));
        return items.filter(function (i) { return i.au["md-collection-selector"].viewModel.isSelected; })
            .map(function (i) { return i.au["md-collection-selector"].viewModel.item; });
    };
    MdCollection.prototype.clearSelection = function () {
        var items = [].slice.call(this.element.querySelectorAll("md-collection-selector"));
        items.forEach(function (i) { return i.au["md-collection-selector"].viewModel.isSelected = false; });
    };
    MdCollection.prototype.selectAll = function () {
        var items = [].slice.call(this.element.querySelectorAll("md-collection-selector"));
        items.forEach(function (i) {
            var vm = i.au["md-collection-selector"].viewModel;
            vm.isSelected = !vm.mdDisabled;
        });
    };
    MdCollection.prototype.toggleIndex = function (index) {
        var items = [].slice.call(this.element.querySelectorAll("md-collection-selector"));
        var vm = items[index].au["md-collection-selector"].viewModel;
        vm.isSelected = !vm.isSelected;
    };
    MdCollection = tslib_1.__decorate([
        au.customElement("md-collection"),
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdCollection);
    return MdCollection;
}());
exports.MdCollection = MdCollection;
//# sourceMappingURL=collection.js.map
System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, MdCollection;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (au_1) {
                au = au_1;
            }
        ],
        execute: function () {
            MdCollection = /** @class */ (function () {
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
            exports_1("MdCollection", MdCollection);
        }
    };
});
//# sourceMappingURL=collection.js.map
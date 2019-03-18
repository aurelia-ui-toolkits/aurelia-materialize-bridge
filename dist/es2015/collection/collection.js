import * as tslib_1 from "tslib";
import * as au from "../aurelia";
let MdCollection = class MdCollection {
    constructor(element) {
        this.element = element;
    }
    attached() {
        const header = this.element.querySelector("md-collection-header");
        if (header) {
            this.anchor.classList.add("with-header");
        }
    }
    getSelected() {
        const items = Array.from(this.element.querySelectorAll("md-collection-selector"));
        return items.filter(i => i.au["md-collection-selector"].viewModel.isSelected)
            .map(i => i.au["md-collection-selector"].viewModel.item);
    }
    clearSelection() {
        const items = [].slice.call(this.element.querySelectorAll("md-collection-selector"));
        items.forEach(i => i.au["md-collection-selector"].viewModel.isSelected = false);
    }
    selectAll() {
        const items = [].slice.call(this.element.querySelectorAll("md-collection-selector"));
        items.forEach(i => {
            const vm = i.au["md-collection-selector"].viewModel;
            vm.isSelected = !vm.mdDisabled;
        });
    }
    toggleIndex(index) {
        const items = [].slice.call(this.element.querySelectorAll("md-collection-selector"));
        const vm = items[index].au["md-collection-selector"].viewModel;
        vm.isSelected = !vm.isSelected;
    }
};
MdCollection = tslib_1.__decorate([
    au.customElement("md-collection"),
    au.autoinject,
    tslib_1.__metadata("design:paramtypes", [Element])
], MdCollection);
export { MdCollection };
//# sourceMappingURL=collection.js.map
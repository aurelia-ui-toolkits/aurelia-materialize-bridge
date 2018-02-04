var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { autoinject, customElement } from "aurelia-framework";
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
        const items = [].slice.call(this.element.querySelectorAll("md-collection-selector"));
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
MdCollection = __decorate([
    customElement("md-collection"),
    autoinject
], MdCollection);
export { MdCollection };

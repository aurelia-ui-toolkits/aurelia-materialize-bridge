var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { autoinject, bindable, customElement, observable } from "aurelia-framework";
import { getBooleanFromAttributeValue } from "../common/attributes";
import { fireMaterializeEvent } from "../common/events";
let MdCollectionSelector = class MdCollectionSelector {
    constructor(element) {
        this.element = element;
        this.mdDisabled = false;
        this.isSelected = false;
    }
    mdDisabledChanged(newValue) {
        this.mdDisabled = getBooleanFromAttributeValue(newValue);
    }
    isSelectedChanged(newValue) {
        fireMaterializeEvent(this.element, "selection-changed", { item: this.item, isSelected: this.isSelected });
    }
};
__decorate([
    bindable,
    __metadata("design:type", Object)
], MdCollectionSelector.prototype, "item", void 0);
__decorate([
    bindable,
    __metadata("design:type", Object)
], MdCollectionSelector.prototype, "mdDisabled", void 0);
__decorate([
    observable,
    __metadata("design:type", Object)
], MdCollectionSelector.prototype, "isSelected", void 0);
MdCollectionSelector = __decorate([
    customElement("md-collection-selector"),
    autoinject,
    __metadata("design:paramtypes", [Element])
], MdCollectionSelector);
export { MdCollectionSelector };

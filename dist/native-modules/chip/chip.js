var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { autoinject, bindable } from "aurelia-framework";
import { getBooleanFromAttributeValue } from "../common/attributes";
import { fireEvent } from "../common/events";
let MdChip = class MdChip {
    constructor(element) {
        this.element = element;
        this.mdClose = false;
    }
    attached() {
        this.mdClose = getBooleanFromAttributeValue(this.mdClose);
    }
    close() {
        this.element.parentElement.removeChild(this.element);
        fireEvent(this.element, "close");
    }
};
__decorate([
    bindable
], MdChip.prototype, "mdClose", void 0);
MdChip = __decorate([
    autoinject
], MdChip);
export { MdChip };

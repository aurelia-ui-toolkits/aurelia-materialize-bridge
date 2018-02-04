var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { bindable, customElement, autoinject } from "aurelia-framework";
import { getBooleanFromAttributeValue } from "../common/attributes";
let MdFab = class MdFab {
    constructor() {
        this.mdFixed = false;
        this.mdLarge = false;
    }
    attached() {
        this.mdFixed = getBooleanFromAttributeValue(this.mdFixed);
        this.mdLarge = getBooleanFromAttributeValue(this.mdLarge);
    }
};
__decorate([
    bindable
], MdFab.prototype, "mdFixed", void 0);
__decorate([
    bindable
], MdFab.prototype, "mdLarge", void 0);
MdFab = __decorate([
    customElement("md-fab"),
    autoinject
], MdFab);
export { MdFab };

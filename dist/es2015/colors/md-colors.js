var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, customElement } from "aurelia-framework";
let MdColors = class MdColors {
    constructor() {
        this.mdErrorColor = "#F44336";
        this.mdSuccessColor = "#26a69a";
    }
};
__decorate([
    bindable,
    __metadata("design:type", String)
], MdColors.prototype, "mdPrimaryColor", void 0);
__decorate([
    bindable,
    __metadata("design:type", String)
], MdColors.prototype, "mdAccentColor", void 0);
__decorate([
    bindable,
    __metadata("design:type", String)
], MdColors.prototype, "mdErrorColor", void 0);
__decorate([
    bindable,
    __metadata("design:type", String)
], MdColors.prototype, "mdSuccessColor", void 0);
MdColors = __decorate([
    customElement("md-colors")
], MdColors);
export { MdColors };

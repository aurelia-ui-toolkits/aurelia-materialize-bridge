var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { bindable, customElement, bindingMode, autoinject } from "aurelia-framework";
let MdProgress = class MdProgress {
    constructor(element) {
        this.element = element;
        this.mdColor = null;
        this.mdPixelSize = null;
        this.mdSize = "big";
        this.mdType = "linear";
        this.mdValue = null;
    }
    mdPixelSizeChanged(newValue) {
        if (this.wrapper) {
            newValue = (newValue === null || newValue === "" || typeof newValue === "number" && isNaN(newValue)) ? "" : `${newValue}px`;
            this.wrapper.style.height = newValue;
            this.wrapper.style.width = newValue;
        }
    }
    bind() {
        // DO NOT REMOVE!!!
        // This disables property changed callbacks for any bindable properties during initialization
        // Prevents mdPixelSize getting cleared by the mdSizeChanged event during binding
    }
    attached() {
        this.mdPixelSizeChanged(this.mdPixelSize);
    }
    mdSizeChanged(newValue) {
        this.mdPixelSize = null;
    }
};
__decorate([
    bindable
], MdProgress.prototype, "mdColor", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay })
], MdProgress.prototype, "mdPixelSize", void 0);
__decorate([
    bindable
], MdProgress.prototype, "mdSize", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime })
], MdProgress.prototype, "mdType", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay })
], MdProgress.prototype, "mdValue", void 0);
MdProgress = __decorate([
    customElement("md-progress"),
    autoinject
], MdProgress);
export { MdProgress };

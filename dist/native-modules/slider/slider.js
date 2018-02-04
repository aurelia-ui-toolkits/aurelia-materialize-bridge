var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { bindable, customElement, autoinject, bindingMode } from "aurelia-framework";
import { getBooleanFromAttributeValue } from "../common/attributes";
import { getLogger } from "aurelia-logging";
let MdSlider = class MdSlider {
    constructor(element) {
        this.element = element;
        this.mdFillContainer = false;
        this.mdHeight = 400;
        this.mdIndicators = true;
        this.mdInterval = 6000;
        this.mdTransition = 500;
        this.log = getLogger("md-slider");
    }
    attached() {
        if (getBooleanFromAttributeValue(this.mdFillContainer)) {
            this.element.classList.add("fullscreen");
        }
        this.refresh();
    }
    pause() {
        $(this.element).slider("pause");
    }
    start() {
        $(this.element).slider("start");
    }
    next() {
        $(this.element).slider("next");
    }
    prev() {
        $(this.element).slider("prev");
    }
    refresh() {
        let options = {
            height: parseInt(this.mdHeight.toString(), 10),
            indicators: getBooleanFromAttributeValue(this.mdIndicators),
            interval: parseInt(this.mdInterval.toString(), 10),
            transition: parseInt(this.mdTransition.toString(), 10)
        };
        this.log.debug("refreshing slider, params:", options);
        $(this.element).slider(options);
    }
    mdIndicatorsChanged() {
        this.refresh();
    }
};
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime })
], MdSlider.prototype, "mdFillContainer", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime })
], MdSlider.prototype, "mdHeight", void 0);
__decorate([
    bindable
], MdSlider.prototype, "mdIndicators", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime })
], MdSlider.prototype, "mdInterval", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime })
], MdSlider.prototype, "mdTransition", void 0);
MdSlider = __decorate([
    customElement("md-slider"),
    autoinject
], MdSlider);
export { MdSlider };

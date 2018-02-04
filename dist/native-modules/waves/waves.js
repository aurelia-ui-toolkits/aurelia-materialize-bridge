var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, customAttribute, autoinject, bindingMode } from "aurelia-framework";
import { AttributeManager } from "../common/attributeManager";
import { getBooleanFromAttributeValue } from "../common/attributes";
import { ConfigBuilder } from "../config-builder";
let MdWaves = class MdWaves {
    constructor(element, configBuilder) {
        this.element = element;
        this.configBuilder = configBuilder;
        this.block = false;
        this.circle = false;
        this.attributeManager = new AttributeManager(this.element);
    }
    attached() {
        let classes = ["waves-effect"];
        if (getBooleanFromAttributeValue(this.block)) {
            classes.push("waves-block");
        }
        if (getBooleanFromAttributeValue(this.circle)) {
            classes.push("waves-circle");
        }
        if (this.color) {
            classes.push(`waves-${this.color}`);
        }
        this.attributeManager.addClasses(classes);
        if (!this.configBuilder.noWavesAttach) {
            Waves.attach(this.element);
        }
    }
    detached() {
        let classes = ["waves-effect", "waves-block"];
        if (this.color) {
            classes.push(`waves-${this.color}`);
        }
        this.attributeManager.removeClasses(classes);
    }
};
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdWaves.prototype, "block", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdWaves.prototype, "circle", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", String)
], MdWaves.prototype, "color", void 0);
MdWaves = __decorate([
    customAttribute("md-waves"),
    autoinject,
    __metadata("design:paramtypes", [Element, ConfigBuilder])
], MdWaves);
export { MdWaves };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, customAttribute, autoinject } from "aurelia-framework";
import { AttributeManager } from "../common/attributeManager";
import { getBooleanFromAttributeValue } from "../common/attributes";
let MdTooltip = class MdTooltip {
    constructor(element) {
        this.element = element;
        this.position = "bottom";
        this.delay = 50;
        this.html = false;
        this.text = "";
        this.attributeManager = new AttributeManager(this.element);
    }
    bind() {
        this.html = getBooleanFromAttributeValue(this.html);
    }
    attached() {
        this.attributeManager.addClasses("tooltipped");
        this.attributeManager.addAttributes({ "data-position": this.position, "data-tooltip": this.text });
        this.initTooltip();
    }
    detached() {
        $(this.element).tooltip("remove");
        this.attributeManager.removeClasses("tooltipped");
        this.attributeManager.removeAttributes(["data-position", "data-tooltip"]);
    }
    textChanged() {
        this.attributeManager.addAttributes({ "data-tooltip": this.text });
        this.initTooltip();
    }
    initTooltip() {
        $(this.element).tooltip("remove");
        $(this.element).tooltip({
            delay: parseInt(this.delay.toString(), 10),
            html: this.html
        });
    }
};
__decorate([
    bindable,
    __metadata("design:type", String)
], MdTooltip.prototype, "position", void 0);
__decorate([
    bindable,
    __metadata("design:type", Object)
], MdTooltip.prototype, "delay", void 0);
__decorate([
    bindable,
    __metadata("design:type", Object)
], MdTooltip.prototype, "html", void 0);
__decorate([
    bindable,
    __metadata("design:type", String)
], MdTooltip.prototype, "text", void 0);
MdTooltip = __decorate([
    customAttribute("md-tooltip"),
    autoinject,
    __metadata("design:paramtypes", [Element])
], MdTooltip);
export { MdTooltip };

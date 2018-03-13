var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { autoinject, bindable, customAttribute } from "aurelia-framework";
import { AttributeManager } from "../common/attributeManager";
import { getBooleanFromAttributeValue } from "../common/attributes";
let MdCollapsible = class MdCollapsible {
    constructor(element) {
        this.element = element;
        this.accordion = false;
        this.popout = false;
        this.attributeManager = new AttributeManager(this.element);
    }
    attached() {
        this.attributeManager.addClasses("collapsible");
        if (getBooleanFromAttributeValue(this.popout)) {
            this.attributeManager.addClasses("popout");
        }
        this.refresh();
    }
    detached() {
        this.attributeManager.removeClasses(["collapsible", "popout"]);
        this.attributeManager.removeAttributes(["data-collapsible"]);
        $(this.element).collapsible("destroy");
    }
    refresh() {
        const accordion = getBooleanFromAttributeValue(this.accordion);
        const dataCollapsibleAttributeValue = accordion ? "accordion" : "expandable";
        this.attributeManager.addAttributes({ "data-collapsible": dataCollapsibleAttributeValue });
        $(this.element).collapsible({
            accordion,
            onOpen: this.buildCollapsibleOpenCloseCallbackHandler(this.onOpen),
            onClose: this.buildCollapsibleOpenCloseCallbackHandler(this.onClose)
        });
    }
    accordionChanged() {
        this.refresh();
    }
    buildCollapsibleOpenCloseCallbackHandler(handler) {
        return typeof (handler) === "function" ?
            (targetElementJquery) => {
                const targetElement = targetElementJquery[0];
                handler(targetElement);
            } : null;
    }
    open(index = 0) {
        $(this.element).collapsible("open", index);
    }
    close(index = 0) {
        $(this.element).collapsible("close", index);
    }
};
__decorate([
    bindable,
    __metadata("design:type", Object)
], MdCollapsible.prototype, "accordion", void 0);
__decorate([
    bindable,
    __metadata("design:type", Object)
], MdCollapsible.prototype, "popout", void 0);
__decorate([
    bindable,
    __metadata("design:type", Function)
], MdCollapsible.prototype, "onOpen", void 0);
__decorate([
    bindable,
    __metadata("design:type", Function)
], MdCollapsible.prototype, "onClose", void 0);
MdCollapsible = __decorate([
    customAttribute("md-collapsible"),
    autoinject,
    __metadata("design:paramtypes", [Element])
], MdCollapsible);
export { MdCollapsible };

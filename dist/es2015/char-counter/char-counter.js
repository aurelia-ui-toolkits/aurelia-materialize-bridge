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
let MdCharCounter = class MdCharCounter {
    constructor(element) {
        this.element = element;
        this.length = 120;
        this.element = element;
        this.attributeManager = new AttributeManager(this.element);
    }
    attached() {
        if (typeof this.length === "string") {
            this.length = parseInt(this.length, 10);
        }
        // attach to input and textarea elements explicitly, so this counter can be
        // used on containers (or custom elements like md-input)
        const tagName = this.element.tagName.toUpperCase();
        if (tagName === "INPUT" || tagName === "TEXTAREA") {
            this.attributeManager.addAttributes({ "data-length": this.length });
            $(this.element).characterCounter();
        }
        else {
            const elem = $(this.element).find("input,textarea");
            elem.each((i, el) => { $(el).attr("data-length", this.length); });
            elem.characterCounter();
        }
    }
    detached() {
        this.attributeManager.removeAttributes(["data-length"]);
    }
};
__decorate([
    bindable,
    __metadata("design:type", Object)
], MdCharCounter.prototype, "length", void 0);
MdCharCounter = __decorate([
    customAttribute("md-char-counter"),
    autoinject,
    __metadata("design:paramtypes", [Element])
], MdCharCounter);
export { MdCharCounter };

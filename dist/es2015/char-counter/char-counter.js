import * as tslib_1 from "tslib";
import * as au from "../aurelia";
let MdCharCounter = class MdCharCounter {
    constructor(element) {
        this.element = element;
        this.length = 120;
        this.instances = [];
        this.attributeManager = new au.AttributeManager(this.element);
    }
    attached() {
        // attach to input and textarea elements explicitly, so this counter can be
        // used on containers (or custom elements like md-input)
        const tagName = this.element.tagName.toUpperCase();
        if (tagName === "INPUT" || tagName === "TEXTAREA") {
            this.attributeManager.addAttributes({ "data-length": this.length });
            this.instances.push(new M.CharacterCounter(this.element));
        }
        else {
            const elem = Array.from(this.element.querySelectorAll("input,textarea"));
            elem.forEach(el => {
                el.setAttribute("data-length", this.length.toString());
                this.instances.push(new M.CharacterCounter(el));
            });
        }
    }
    detached() {
        this.instances.forEach(x => x.destroy());
        this.attributeManager.removeAttributes(["data-length"]);
    }
};
tslib_1.__decorate([
    au.ato.bindable.numberMd,
    tslib_1.__metadata("design:type", Number)
], MdCharCounter.prototype, "length", void 0);
MdCharCounter = tslib_1.__decorate([
    au.customAttribute("md-char-counter"),
    au.autoinject,
    tslib_1.__metadata("design:paramtypes", [Element])
], MdCharCounter);
export { MdCharCounter };
//# sourceMappingURL=char-counter.js.map
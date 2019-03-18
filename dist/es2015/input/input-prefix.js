import * as tslib_1 from "tslib";
import * as au from "../aurelia";
let MdPrefix = class MdPrefix {
    constructor(element) {
        this.element = element;
        this.attributeManager = new au.AttributeManager(this.element);
    }
    bind() {
        this.attributeManager.addClasses("prefix");
    }
    unbind() {
        this.attributeManager.removeClasses("prefix");
    }
};
MdPrefix = tslib_1.__decorate([
    au.customAttribute("md-prefix"),
    au.autoinject,
    tslib_1.__metadata("design:paramtypes", [Element])
], MdPrefix);
export { MdPrefix };
//# sourceMappingURL=input-prefix.js.map
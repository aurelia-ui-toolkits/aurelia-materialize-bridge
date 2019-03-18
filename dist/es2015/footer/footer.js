import * as tslib_1 from "tslib";
import * as au from "../aurelia";
let MdFooter = class MdFooter {
    constructor(element) {
        this.element = element;
        this.attributeManager = new au.AttributeManager(this.element);
    }
    bind() {
        this.attributeManager.addClasses("page-footer");
    }
    unbind() {
        this.attributeManager.removeClasses("page-footer");
    }
};
MdFooter = tslib_1.__decorate([
    au.customAttribute("md-footer"),
    au.autoinject,
    tslib_1.__metadata("design:paramtypes", [Element])
], MdFooter);
export { MdFooter };
//# sourceMappingURL=footer.js.map
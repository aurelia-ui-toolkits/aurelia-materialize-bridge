import { __decorate, __metadata } from "tslib";
import * as au from "../aurelia";
let MdScrollSpy = class MdScrollSpy {
    constructor(element) {
        this.element = element;
    }
    attached() {
        let options = {
            throttle: this.throttle,
            scrollOffset: this.scrollOffset,
            activeClass: this.activeClass,
            getActiveElement: this.getActiveElement
        };
        au.cleanOptions(options);
        this.instance = new M.ScrollSpy(this.element, options);
    }
    detached() {
        this.instance.destroy();
    }
};
__decorate([
    au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
    __metadata("design:type", Number)
], MdScrollSpy.prototype, "throttle", void 0);
__decorate([
    au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
    __metadata("design:type", Number)
], MdScrollSpy.prototype, "scrollOffset", void 0);
__decorate([
    au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
    __metadata("design:type", String)
], MdScrollSpy.prototype, "activeClass", void 0);
__decorate([
    au.bindable,
    __metadata("design:type", Function)
], MdScrollSpy.prototype, "getActiveElement", void 0);
MdScrollSpy = __decorate([
    au.customAttribute("md-scrollspy"),
    au.autoinject,
    __metadata("design:paramtypes", [Element])
], MdScrollSpy);
export { MdScrollSpy };
//# sourceMappingURL=scrollspy.js.map
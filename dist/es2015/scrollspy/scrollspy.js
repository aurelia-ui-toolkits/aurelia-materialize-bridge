import * as tslib_1 from "tslib";
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
tslib_1.__decorate([
    au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Number)
], MdScrollSpy.prototype, "throttle", void 0);
tslib_1.__decorate([
    au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", Number)
], MdScrollSpy.prototype, "scrollOffset", void 0);
tslib_1.__decorate([
    au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
    tslib_1.__metadata("design:type", String)
], MdScrollSpy.prototype, "activeClass", void 0);
tslib_1.__decorate([
    au.bindable,
    tslib_1.__metadata("design:type", Function)
], MdScrollSpy.prototype, "getActiveElement", void 0);
MdScrollSpy = tslib_1.__decorate([
    au.customAttribute("md-scrollspy"),
    au.autoinject,
    tslib_1.__metadata("design:paramtypes", [Element])
], MdScrollSpy);
export { MdScrollSpy };
//# sourceMappingURL=scrollspy.js.map
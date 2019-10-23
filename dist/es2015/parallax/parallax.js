import { __decorate, __metadata } from "tslib";
import * as au from "../aurelia";
let MdParallax = class MdParallax {
    constructor(element) {
        this.element = element;
    }
    attached() {
        this.element.classList.add("parallax");
        let options = {
            responsiveThreshold: this.responsiveThreshold
        };
        au.cleanOptions(options);
        this.instance = new M.Parallax(this.element, options);
    }
    detached() {
        this.instance.destroy();
        this.element.classList.remove("parallax");
    }
};
__decorate([
    au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
    __metadata("design:type", Number)
], MdParallax.prototype, "responsiveThreshold", void 0);
MdParallax = __decorate([
    au.customAttribute("md-parallax"),
    au.autoinject,
    __metadata("design:paramtypes", [Element])
], MdParallax);
export { MdParallax };
//# sourceMappingURL=parallax.js.map
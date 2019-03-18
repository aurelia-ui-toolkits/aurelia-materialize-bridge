import * as tslib_1 from "tslib";
import * as au from "../aurelia";
let MdColorsLegacy = class MdColorsLegacy {
    constructor(cs, bindingEngine) {
        this.cs = cs;
        this.bindingEngine = bindingEngine;
        this.primaryColor = this.cs.primaryColor;
        this.accentColor = this.cs.secondaryColor;
        this.errorColor = this.cs.errorColor;
        this.successColor = this.cs.successColor;
        this.subscriptions = [];
    }
    primaryColorChanged() {
        this.cs.primaryColor = this.primaryColor;
    }
    accentColorChanged() {
        this.cs.secondaryColor = this.accentColor;
    }
    errorColorChanged() {
        this.cs.errorColor = this.errorColor;
    }
    successColorChanged() {
        this.cs.successColor = this.successColor;
    }
    attached() {
        this.subscriptions.push(this.bindingEngine.propertyObserver(this.cs, "primaryColor").subscribe(() => this.primaryColor = this.cs.primaryColor));
        this.subscriptions.push(this.bindingEngine.propertyObserver(this.cs, "accentColor").subscribe(() => this.accentColor = this.cs.secondaryColor));
        this.subscriptions.push(this.bindingEngine.propertyObserver(this.cs, "errorColor").subscribe(() => this.errorColor = this.cs.errorColor));
        this.subscriptions.push(this.bindingEngine.propertyObserver(this.cs, "successColor").subscribe(() => this.successColor = this.cs.successColor));
    }
    detached() {
        this.subscriptions.forEach(x => x.dispose());
    }
};
tslib_1.__decorate([
    au.bindable,
    tslib_1.__metadata("design:type", String)
], MdColorsLegacy.prototype, "primaryColor", void 0);
tslib_1.__decorate([
    au.bindable,
    tslib_1.__metadata("design:type", String)
], MdColorsLegacy.prototype, "accentColor", void 0);
tslib_1.__decorate([
    au.bindable,
    tslib_1.__metadata("design:type", String)
], MdColorsLegacy.prototype, "errorColor", void 0);
tslib_1.__decorate([
    au.bindable,
    tslib_1.__metadata("design:type", String)
], MdColorsLegacy.prototype, "successColor", void 0);
MdColorsLegacy = tslib_1.__decorate([
    au.customElement("md-colors"),
    tslib_1.__metadata("design:paramtypes", [au.MdColorsService, au.BindingEngine])
], MdColorsLegacy);
export { MdColorsLegacy };
//# sourceMappingURL=md-colors-legacy.js.map
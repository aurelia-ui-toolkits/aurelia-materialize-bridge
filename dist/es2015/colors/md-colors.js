import * as tslib_1 from "tslib";
import * as au from "../aurelia";
let MdColors = class MdColors {
    constructor(cs, bindingEngine) {
        this.cs = cs;
        this.bindingEngine = bindingEngine;
        this.primaryColor = this.cs.primaryColor;
        this.primaryColorLight = this.cs.primaryColorLight;
        this.primaryColorDark = this.cs.primaryColorDark;
        this.secondaryColor = this.cs.secondaryColor;
        this.errorColor = this.cs.errorColor;
        this.successColor = this.cs.successColor;
        this.linkColor = this.cs.linkColor;
        this.subscriptions = [];
    }
    primaryColorChanged() {
        this.cs.primaryColor = this.primaryColor;
        this.cs.updatePrimaryShades();
    }
    secondaryColorChanged() {
        this.cs.secondaryColor = this.secondaryColor;
    }
    errorColorChanged() {
        this.cs.errorColor = this.errorColor;
    }
    successColorChanged() {
        this.cs.successColor = this.successColor;
    }
    linkColorChanged() {
        this.cs.linkColor = this.linkColor;
    }
    attached() {
        this.subscriptions.push(this.bindingEngine.propertyObserver(this.cs, "primaryColor").subscribe(() => this.primaryColor = this.cs.primaryColor));
        this.subscriptions.push(this.bindingEngine.propertyObserver(this.cs, "primaryColorLight").subscribe(() => this.primaryColorLight = this.cs.primaryColorLight));
        this.subscriptions.push(this.bindingEngine.propertyObserver(this.cs, "primaryColorDark").subscribe(() => this.primaryColorDark = this.cs.primaryColorDark));
        this.subscriptions.push(this.bindingEngine.propertyObserver(this.cs, "secondaryColor").subscribe(() => this.secondaryColor = this.cs.secondaryColor));
        this.subscriptions.push(this.bindingEngine.propertyObserver(this.cs, "errorColor").subscribe(() => this.errorColor = this.cs.errorColor));
        this.subscriptions.push(this.bindingEngine.propertyObserver(this.cs, "successColor").subscribe(() => this.successColor = this.cs.successColor));
        this.subscriptions.push(this.bindingEngine.propertyObserver(this.cs, "linkColor").subscribe(() => this.linkColor = this.cs.linkColor));
        this.primaryColorLight = this.cs.primaryColorLight;
        this.primaryColorDark = this.cs.primaryColorDark;
    }
    detached() {
        this.subscriptions.forEach(x => x.dispose());
    }
};
tslib_1.__decorate([
    au.bindable,
    tslib_1.__metadata("design:type", String)
], MdColors.prototype, "primaryColor", void 0);
tslib_1.__decorate([
    au.bindable,
    tslib_1.__metadata("design:type", String)
], MdColors.prototype, "secondaryColor", void 0);
tslib_1.__decorate([
    au.bindable,
    tslib_1.__metadata("design:type", String)
], MdColors.prototype, "errorColor", void 0);
tslib_1.__decorate([
    au.bindable,
    tslib_1.__metadata("design:type", String)
], MdColors.prototype, "successColor", void 0);
tslib_1.__decorate([
    au.bindable,
    tslib_1.__metadata("design:type", String)
], MdColors.prototype, "linkColor", void 0);
MdColors = tslib_1.__decorate([
    au.customElement("md-colors"),
    tslib_1.__metadata("design:paramtypes", [au.MdColorsService, au.BindingEngine])
], MdColors);
export { MdColors };
//# sourceMappingURL=md-colors.js.map
import * as tslib_1 from "tslib";
import * as au from "../aurelia";
var MdColors = /** @class */ (function () {
    function MdColors() {
        this.mdErrorColor = "#F44336";
        this.mdSuccessColor = "#26A69A";
    }
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", String)
    ], MdColors.prototype, "mdPrimaryColor", void 0);
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", String)
    ], MdColors.prototype, "mdAccentColor", void 0);
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", String)
    ], MdColors.prototype, "mdErrorColor", void 0);
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", String)
    ], MdColors.prototype, "mdSuccessColor", void 0);
    MdColors = tslib_1.__decorate([
        au.customElement("md-colors")
    ], MdColors);
    return MdColors;
}());
export { MdColors };
//# sourceMappingURL=md-colors.js.map
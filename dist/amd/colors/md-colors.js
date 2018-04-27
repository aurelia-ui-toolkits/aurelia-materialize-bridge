define(["require", "exports", "tslib", "../aurelia"], function (require, exports, tslib_1, au) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    exports.MdColors = MdColors;
});
//# sourceMappingURL=md-colors.js.map
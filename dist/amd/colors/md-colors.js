define(["require", "exports", "tslib", "aurelia-framework"], function (require, exports, tslib_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdColors = /** @class */ (function () {
        function MdColors() {
            this.mdErrorColor = "#F44336";
            this.mdSuccessColor = "#26a69a";
        }
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", String)
        ], MdColors.prototype, "mdPrimaryColor", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", String)
        ], MdColors.prototype, "mdAccentColor", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", String)
        ], MdColors.prototype, "mdErrorColor", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", String)
        ], MdColors.prototype, "mdSuccessColor", void 0);
        MdColors = tslib_1.__decorate([
            aurelia_framework_1.customElement("md-colors")
        ], MdColors);
        return MdColors;
    }());
    exports.MdColors = MdColors;
});

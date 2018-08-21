System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, MdPushpin;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (au_1) {
                au = au_1;
            }
        ],
        execute: function () {
            MdPushpin = /** @class */ (function () {
                function MdPushpin(element) {
                    this.element = element;
                }
                MdPushpin.prototype.attached = function () {
                    var _this = this;
                    var options = {
                        bottom: this.bottom,
                        offset: this.offset,
                        top: this.top,
                        onPositionChange: function (position) { return au.fireMaterializeEvent(_this.element, "position-change", { position: position }); }
                    };
                    au.cleanOptions(options);
                    this.instance = new M.Pushpin(this.element, options);
                };
                MdPushpin.prototype.detached = function () {
                    this.instance.destroy();
                };
                tslib_1.__decorate([
                    au.ato.bindable.numberMd,
                    tslib_1.__metadata("design:type", Number)
                ], MdPushpin.prototype, "bottom", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.numberMd,
                    tslib_1.__metadata("design:type", Number)
                ], MdPushpin.prototype, "offset", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.numberMd,
                    tslib_1.__metadata("design:type", Number)
                ], MdPushpin.prototype, "top", void 0);
                MdPushpin = tslib_1.__decorate([
                    au.customAttribute("md-pushpin"),
                    au.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], MdPushpin);
                return MdPushpin;
            }());
            exports_1("MdPushpin", MdPushpin);
        }
    };
});
//# sourceMappingURL=pushpin.js.map
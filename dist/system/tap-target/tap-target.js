System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, MdTapTarget;
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
            MdTapTarget = /** @class */ (function () {
                function MdTapTarget(element) {
                    this.element = element;
                    this.log = au.getLogger("md-tap-target");
                }
                MdTapTarget_1 = MdTapTarget;
                MdTapTarget.prototype.bind = function () {
                    if (!this.ref) {
                        throw new Error("md-tap-target needs a referenced element");
                    }
                    else {
                        var id = this.ref.getAttribute("id");
                        if (!id) {
                            id = "md-tap-target-" + MdTapTarget_1.controlId++;
                            this.ref.setAttribute("id", id);
                        }
                        this.element.setAttribute("data-target", id);
                    }
                };
                MdTapTarget.prototype.attached = function () {
                    var _this = this;
                    this.instance = new M.TapTarget(this.element, {
                        onOpen: function () { return au.fireMaterializeEvent(_this.element, "on-open"); },
                        onClose: function () { return au.fireMaterializeEvent(_this.element, "on-close"); }
                    });
                };
                MdTapTarget.prototype.detached = function () {
                    this.instance.destroy();
                };
                MdTapTarget.prototype.open = function () {
                    this.instance.open();
                };
                MdTapTarget.prototype.close = function () {
                    this.instance.close();
                };
                var MdTapTarget_1;
                MdTapTarget.controlId = 0;
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", HTMLElement)
                ], MdTapTarget.prototype, "ref", void 0);
                MdTapTarget = MdTapTarget_1 = tslib_1.__decorate([
                    au.customElement("md-tap-target"),
                    au.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], MdTapTarget);
                return MdTapTarget;
            }());
            exports_1("MdTapTarget", MdTapTarget);
        }
    };
});
//# sourceMappingURL=tap-target.js.map
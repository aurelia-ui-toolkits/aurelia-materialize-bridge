define(["require", "exports", "tslib", "../aurelia"], function (require, exports, tslib_1, au) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdSidenav = /** @class */ (function () {
        function MdSidenav(element) {
            this.element = element;
            this.mdFixed = false;
            this.controlId = "md-sidenav-" + MdSidenav_1.id++;
        }
        MdSidenav_1 = MdSidenav;
        MdSidenav.prototype.mdFixedChanged = function (newValue) {
            if (!this.attributeManager) {
                return;
            }
            if (newValue) {
                this.attributeManager.addClasses(MdSidenav_1.fixedClass);
            }
            else {
                this.attributeManager.removeClasses(MdSidenav_1.fixedClass);
            }
        };
        MdSidenav.prototype.attached = function () {
            this.attributeManager = new au.AttributeManager(this.sidenav);
            if (this.mdFixed) {
                this.attributeManager.addClasses(MdSidenav_1.fixedClass);
            }
            this.instance = new M.Sidenav(this.sidenav, this.options);
        };
        MdSidenav.prototype.open = function () {
            if (this.instance) {
                this.instance.open();
            }
        };
        MdSidenav.prototype.close = function () {
            if (this.instance) {
                this.instance.close();
            }
        };
        MdSidenav.prototype.detached = function () {
            this.attributeManager.removeClasses([MdSidenav_1.fixedClass]);
            if (this.instance) {
                this.instance.destroy();
            }
        };
        MdSidenav.fixedClass = "sidenav-fixed";
        MdSidenav.id = 0;
        tslib_1.__decorate([
            au.bindable,
            tslib_1.__metadata("design:type", Object)
        ], MdSidenav.prototype, "options", void 0);
        tslib_1.__decorate([
            au.ato.bindable.booleanMd,
            tslib_1.__metadata("design:type", Boolean)
        ], MdSidenav.prototype, "mdFixed", void 0);
        MdSidenav = MdSidenav_1 = tslib_1.__decorate([
            au.customElement("md-sidenav"),
            au.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element])
        ], MdSidenav);
        return MdSidenav;
        var MdSidenav_1;
    }());
    exports.MdSidenav = MdSidenav;
});
//# sourceMappingURL=sidenav.js.map
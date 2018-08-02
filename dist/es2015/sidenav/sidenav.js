import * as tslib_1 from "tslib";
import * as au from "../aurelia";
var MdSidenav = /** @class */ (function () {
    function MdSidenav(element) {
        this.element = element;
        this.fixed = false;
        this.controlId = "md-sidenav-" + MdSidenav_1.id++;
    }
    MdSidenav_1 = MdSidenav;
    MdSidenav.prototype.fixedChanged = function (newValue) {
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
        var _this = this;
        this.attributeManager = new au.AttributeManager(this.sidenav);
        if (this.fixed) {
            this.attributeManager.addClasses(MdSidenav_1.fixedClass);
        }
        var options = {
            draggable: this.draggable,
            edge: this.edge,
            inDuration: this.inDuration,
            outDuration: this.outDuration,
            onOpenStart: function (elem) { return au.fireMaterializeEvent(_this.element, "open-start", { elem: elem }); },
            onOpenEnd: function (elem) { return au.fireMaterializeEvent(_this.element, "open-end", { elem: elem }); },
            onCloseStart: function (elem) { return au.fireMaterializeEvent(_this.element, "close-start", { elem: elem }); },
            onCloseEnd: function (elem) { return au.fireMaterializeEvent(_this.element, "close-end", { elem: elem }); }
        };
        au.cleanOptions(options);
        this.instance = new M.Sidenav(this.sidenav, options);
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
    var MdSidenav_1;
    MdSidenav.fixedClass = "sidenav-fixed";
    MdSidenav.id = 0;
    tslib_1.__decorate([
        au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", String)
    ], MdSidenav.prototype, "edge", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdSidenav.prototype, "draggable", void 0);
    tslib_1.__decorate([
        au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Number)
    ], MdSidenav.prototype, "inDuration", void 0);
    tslib_1.__decorate([
        au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Number)
    ], MdSidenav.prototype, "outDuration", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], MdSidenav.prototype, "fixed", void 0);
    MdSidenav = MdSidenav_1 = tslib_1.__decorate([
        au.customElement("md-sidenav"),
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdSidenav);
    return MdSidenav;
}());
export { MdSidenav };
//# sourceMappingURL=sidenav.js.map